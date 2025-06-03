import { ForbiddenException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";

import { LoginDto, ReSignAccessTokenDto, SignupDto } from "./dto";


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    async getLogin(dto: LoginDto) {
        // Check if the user exists by username or email
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { username: dto.identity },
                    { email: dto.identity }
                ]
            }
        });
        if (!user) {
            throw new ForbiddenException("User not found");
        }

        // Verify the password using argon2
        const isMatch = await argon.verify(user.passwordHash, dto.password);
        if (!isMatch) {
            throw new ForbiddenException("Wrong password");
        }

        // Generate JWT token
        const accessToken = await this.signAccessToken(user.id, user.username);
        const refreshToken = await this.signRefreshToken(user.id, user.username);
        return { accessToken: accessToken, refreshToken: refreshToken };
    }

    async getSignup(dto: SignupDto) {
        const passwordHash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    username: dto.username,
                    email: dto.email,
                    passwordHash: passwordHash,
                }
            });
            const accessToken = await this.signAccessToken(user.id, user.username);
            const refreshToken = await this.signRefreshToken(user.id, user.username);
            return { accessToken: accessToken, refreshToken: refreshToken };
        } catch (error) {
            throw new ForbiddenException("Error creating user: " + error.message);
        }
    }

    async signAccessToken(userId: number, username: string): Promise<string> {
        const payload = { sub: userId, username: username };
        const secret = process.env.ACCESS_TOKEN_SECRET || 'defaultAccessTokenSecret';
        try {
            const token = await this.jwt.signAsync(payload, {
                expiresIn: "15m",
                secret: secret,
            });
            return token;
        } catch (error) {
            throw new Error("Error signing access token: " + error.message);
        }
    }

    async reSignAccessToken(dto: ReSignAccessTokenDto): Promise<string> {
        try {
            const payload = await this.jwt.verifyAsync(dto.refreshToken, {
                secret: process.env.REFRESH_TOKEN_SECRET || 'defaultRefreshTokenSecret',
            });
            const user = await this.prisma.user.findUnique({
                where: { id: payload.sub, username: payload.username },
            })
            if (!user || !user.refreshToken || user.refreshToken !== dto.refreshToken) {
                throw new ForbiddenException("Invalid refresh token");
            }
            return await this.signAccessToken(payload.sub, payload.username);
        } catch (error) {
            throw new ForbiddenException("Error re-signing access token: " + error.message);
        }
    }

    async signRefreshToken(userId: number, username: string): Promise<string> {
        // Check if the user exists by username
        const user = await this.prisma.user.findUnique({
            where: { id: userId, username: username },
        });
        if (!user) {
            throw new ForbiddenException("User not found");
        }

        // Generate a new refresh token
        const payload = { sub: userId, username: username };
        const secret = process.env.REFRESH_TOKEN_SECRET || 'defaultRefreshTokenSecret';
        try {
            const token = await this.jwt.signAsync(payload, {
                expiresIn: "7d",
                secret: secret,
            });
            await this.prisma.user.update({
                where: { id: userId },
                data: { refreshToken: token }
            });
            return token;
        } catch (error) {
            throw new ForbiddenException("Error generating refresh token: " + error.message);
        }
    }
}