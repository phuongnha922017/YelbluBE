import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";

import { AuthService } from "./auth.service";
import { LoginDto, ReSignAccessTokenDto, SignupDto } from "./dto";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @ApiOperation({ summary: "API for user login" })
    @Post('login')
    @ApiBody({ type: LoginDto, required: true })
    async login(@Body() dto: LoginDto) {
        return await this.authService.getLogin(dto);
    }

    @ApiOperation({ summary: "API for user signup" })
    @Post('signup')
    @ApiBody({ type: SignupDto, required: true })
    async signup(@Body() dto: SignupDto) {
        return await this.authService.getSignup(dto);
    }

    @ApiOperation({ summary: "API for generating new access token" })
    @Post('resign-access-token')
    @ApiBody({ type: ReSignAccessTokenDto, required: true })
    async reSignaccessToken(@Body() dto: ReSignAccessTokenDto) {
        return await this.authService.reSignAccessToken(dto);
    }
}