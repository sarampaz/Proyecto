/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/await-thenable */
import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { Favoritos } from '../interfaces/favoritos';

@Injectable()
export class FavoritosListaService {
    constructor(private supabaseService: SupabaseService) { }

    async saveWhislist(favoritosBody: Favoritos): Promise<Favoritos[] | Error> {

        const supabaseClient = await this.supabaseService.crearClientSupabase();
        const { data, error } = await supabaseClient
            .from('favorites')
            .insert([favoritosBody])
            .select();

        if (error) {
            return error;
        }

        return data as Favoritos[];
    }

    async getWhislist(idUser: string): Promise<Favoritos[] | Error> {
        console.log('idUser:', idUser);
        const supabaseClient = await this.supabaseService.crearClientSupabase();
        const { data, error } = await supabaseClient
            .from('favorites')
            .select('*, product:product_id(*), tienda:tienda_id(*)')
            .eq('user_id', idUser);

        if (error) {
            return error;
        }

        return data as Favoritos[];
    }

    async deleteWhislist(idUser: string, idProduct: string): Promise<Favoritos[] | Error> {
        const supabaseClient = await this.supabaseService.crearClientSupabase();
        const { data, error } = await supabaseClient
            .from('favorites')
            .delete()
            .eq('user_id', idUser)
            .eq('product_id', idProduct)
            .select();

        if (error) {
            return error;
        }

        return data as Favoritos[];
    }

    async getWhislistByProduct(idUser: string, idProduct: string): Promise<Favoritos[] | Error> {
        const supabaseClient = await this.supabaseService.crearClientSupabase();
        const { data, error } = await supabaseClient
            .from('favorites')
            .select()
            .eq('user_id', idUser)
            .eq('product_id', idProduct);

        if (error) {
            return error;
        }

        return data as Favoritos[];
    }
}
