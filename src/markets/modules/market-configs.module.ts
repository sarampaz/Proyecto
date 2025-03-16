import { Module } from '@nestjs/common';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { MarketConfigsService } from '../services/market-configs.service';
import { MarketsConfigsController } from '../controllers/market-configs.controller';

@Module({
    imports: [SupabaseModule],
    controllers: [MarketsConfigsController],
    providers: [MarketConfigsService],
    exports: [],
})
export class MarketsConfigsModule { }
