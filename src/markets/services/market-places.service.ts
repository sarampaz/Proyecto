/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class MarketPlacesService {
  constructor(private supabaseService: SupabaseService) {}

  @Public()
  async getAllMarkets() {
    // await supabase.from('tiendas').select('*')
    const supabaseClient = await this.supabaseService.crearClientSupabase();
    return await supabaseClient.from('tiendas').select('*');
  }
}
