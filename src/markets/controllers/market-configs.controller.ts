import { Controller, Get, Param } from '@nestjs/common';
import { MarketConfigsService } from '../services/market-configs.service';

@Controller('markets-configs')
export class MarketsConfigsController {
  constructor(private readonly marketConfigsService: MarketConfigsService) {}

  @Get(':id')
  async getConfigByMarketId(@Param('id') id: number) {
    return await this.marketConfigsService.getConfigsByMarkets(id);
  }
}
