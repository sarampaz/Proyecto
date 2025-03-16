/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: { correo: string; contrasena: string }) {
    return this.authService.login(body.correo, body.contrasena); 
  } 

  @Public()
  @Post('signup')
  async signUp(@Body() body: { correo: string; contrasena: string }) {
    return this.authService.signUp(body.correo, body.contrasena);
  }

  @Get('session/me')
  findAll(@Request() request) {
    const user = request.user;
    console.log('user', user);
    return user;
  }
}
