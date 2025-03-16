/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/await-thenable */
import { Injectable } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class MarketConfigsService {
  constructor(private supabaseService: SupabaseService) {}

  @Public()
  async getConfigsByMarkets(id: number) {
    const supabaseClient = await this.supabaseService.crearClientSupabase();
    return await supabaseClient.from('configxTiendas').select('*').eq('idTienda', id);
  }
}
