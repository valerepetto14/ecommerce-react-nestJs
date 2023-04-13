import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // @Post('login')
    @Post('login')
    login(
        @Body() body: LoginDto,
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ) {
        console.log(body);
        return this.authService.login(body, req, res);
    }

    // @Post('register')
    @Post('register')
    register(@Body() body: RegisterDto) {
        return this.authService.register(body);
    }

    @Get('verify')
    verifyToken(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ) {
        return this.authService.verifyToken(req, res);
    }

    @Get('logout')
    logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        return this.authService.logout(req, res);
    }
}
