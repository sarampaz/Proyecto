/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly supabaseService: SupabaseService,
  ) { }

  // Validar usuario con Supabase
  async validateUser(email: string, password: string) {
    const { data, error } = await this.supabaseService.signIn(email, password);
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return data;
  }

  async signUp(email: string, password: string) {
    const { data, error } = await this.supabaseService.signUpNewUser(email, password); 
    if (error) {
      throw new UnauthorizedException(error.message);
    } 
    return data.user;
  }



  // Iniciar sesión y generar JWT
  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    return {
      access_token: user.session.access_token
    }
    // const payload = { sub: user.id, email: user.email };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }
  
  async getSession(token) {
    return await this.supabaseService.getSession(token);
  }
}
