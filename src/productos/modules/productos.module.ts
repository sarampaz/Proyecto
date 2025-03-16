import { Module } from '@nestjs/common';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { ProductosService } from '../services/productos.services';
import { ProductosController } from '../controllers/productos.controller';

@Module({
    imports: [SupabaseModule],
    controllers: [ProductosController],
    providers: [ProductosService],
    exports: [],
})
export class ProductosModule {}
