import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductosService } from '../services/productos.services';
import { Public } from 'src/auth/public.decorator';

@Controller('productos')
export class ProductosController {
  constructor(private readonly ProductosService: ProductosService) {}

  @Public()
  @Get(':id')
  async getAll(@Param('id') id: number) {
    return await this.ProductosService.getAllProductosbyID(id);
  }

  @Public()
  @Post('/guardarFacturacion')
  async guardarFacturacion(@Body() body: any) {
    return await this.ProductosService.guardarPedido(body);
  }
}

