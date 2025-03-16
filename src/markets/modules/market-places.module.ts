import { Module } from '@nestjs/common';
import { MarketsPlacesController } from '../controllers/market-places.controller';
import { MarketPlacesService } from '../services/market-places.service';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
    imports: [SupabaseModule],
    controllers: [MarketsPlacesController],
    providers: [MarketPlacesService],
    exports: [],
})
export class MarketsPlacesModule { }
