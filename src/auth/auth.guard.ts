/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SupabaseService } from 'src/supabase/supabase.service';
import { IS_PUBLIC_KEY } from './public.decorator';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector, private supabaseService: SupabaseService) { }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {

        const isPublic = this.reflector.get<boolean>(IS_PUBLIC_KEY, context.getHandler());

        // Si la ruta está marcada como pública, no validamos el token
        if (isPublic) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new UnauthorizedException('Token no proporcionado');
        }

        const session = await this.supabaseService.getSession(token);
        console.log('Session:', session);
        request.user = session;
        return true;
    }
}
