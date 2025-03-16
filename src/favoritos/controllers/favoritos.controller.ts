/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Param, Post, Body, Request, Req } from '@nestjs/common';
import { FavoritosListaService } from '../services/favoritos.service';
import { Favoritos } from '../interfaces/favoritos';
import { RequestCustomer } from 'src/auth/claims.interface';

@Controller('favoritos')
export class ListaFavoritosController {
    constructor(private readonly favoritosListaService: FavoritosListaService) { }

    @Get('lista')
    async getListaFavoritaPorUsuario(@Request() request) {
        const user = request as RequestCustomer;
        console.log('user rquest:', user.user.user.id);
        return await this.favoritosListaService.getWhislist(user.user.user.id);
    }

    @Post('crear')
    async guardarListaFavoritaPorUsuario(@Body() favoritasLista: Favoritos) {
        return await this.favoritosListaService.saveWhislist(favoritasLista);
    }
}
