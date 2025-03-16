/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FavoritosListaModule } from './modules/favoritos-list.module';

@Module({
  imports: [FavoritosListaModule],
  controllers: [],
  providers: []
})
export class FavoritosModule {}
