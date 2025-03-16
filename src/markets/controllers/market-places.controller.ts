import { Controller, Get } from '@nestjs/common';
import { MarketPlacesService } from '../services/market-places.service';
import { Public } from '../../auth/public.decorator';

@Controller('markets-places')
export class MarketsPlacesController {
  constructor(private readonly marketProductsService: MarketPlacesService) {}

  @Public()
  @Get('')
  async getAll() {
    return await this.marketProductsService.getAllMarkets();
  }
}
