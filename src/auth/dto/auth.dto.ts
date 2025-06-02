import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class LoginDto {
    @ApiProperty({ type: String, description: "Username or Email for login", required: true, example: "johndoe or johndoe@example.com" })
    @IsString()
    identity: string;

    @ApiProperty({ type: String, description: "Password for login", required: true, example: "strongPassword123@" })
    @IsString()
    password: string;
}

export class SignupDto {
    @ApiProperty({ type: String, description: "Username for signup", required: true, example: "johndoe" })
    @IsString()
    @MinLength(3)
    @MaxLength(32)
    username: string;

    @ApiProperty({ type: String, description: "Email for signup", required: true, example: "johndoe@example.com" })
    @IsEmail()
    @MaxLength(255)
    email: string;

    @ApiProperty({ type: String, description: "Must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character", required: true, example: "strongPassword123@" })
    @IsString()
    @MinLength(8)
    @MaxLength(255)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?![.\n]).*$/,
        { message: "Password must contain uppercase, lowercase letter, number and special character" }
    )
    password: string;
}

export class ReSignAccessToken {
    @ApiProperty({ type: String, description: "Refresh token to re-sign access token", required: true, example: "eyJhbGci..." })
    @IsString()
    refreshToken: string;
}