import { Module } from '@nestjs/common';
import { MarketsPlacesModule } from './modules/market-places.module';
import { MarketsConfigsModule } from './modules/market-configs.module';

@Module({
  imports: [MarketsPlacesModule, MarketsConfigsModule],
  controllers: [],
  providers: []
})
export class MarketsModule {}
