/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ListaFavoritosController } from '../controllers/favoritos.controller';
import { FavoritosListaService } from '../services/favoritos.service';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [ListaFavoritosController],
  providers: [FavoritosListaService],
  exports: []
})
export class FavoritosListaModule {}
