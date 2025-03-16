import { Module } from '@nestjs/common';
import { ProductosModule } from './modules/productos.module';

@Module({
  imports: [ProductosModule],
  controllers: [],
  providers: []
})
export class ProductoModule {}
