import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class ProductosService {
  constructor(private supabaseService: SupabaseService) { }

  // Obtener el usuario actual desde Supabase (usando el token JWT)
  async getAllProductosbyID(id: number) {
    // await supabase.from('tiendas').select('*')
    const supabaseClient = await this.supabaseService.crearClientSupabase();
    return await supabaseClient.from('productos').select('*').eq('idTienda', id);
  }

  async guardarPedido(ordenPedido: any) {
    const supabaseClient = await this.supabaseService.crearClientSupabase();
    const { data, error } = await supabaseClient.from('facturacion').insert([ordenPedido]).select();
    if (error) {
      return { error };
    }
    return { data };
  }


}
