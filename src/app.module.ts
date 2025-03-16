/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';  // Importa el módulo de autenticación
import { UsersModule } from './users/users.module'; // Importa el módulo de usuarios
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketsModule } from './markets/market.module';
import { ProductoModule } from './productos/productos.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { SupabaseModule } from './supabase/supabase.module';
import { FavoritosModule } from './favoritos/favoritos.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    SupabaseModule,
    MarketsModule,
    ProductoModule,
    FavoritosModule,
    AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
  }
 }

