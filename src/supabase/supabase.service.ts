/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { UUID } from 'crypto';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      "https://tlnafxzdfuafsbkdytfy.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsbmFmeHpkZnVhZnNia2R5dGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5ODk0NzcsImV4cCI6MjA1NDU2NTQ3N30.umQF5J5y96Us0dL-t8fMCOq8kzzJ_zC0SjBZN5VFYt4",
    );
  }

  crearClientSupabase() {
    return this.supabase;
  }

  async signIn(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({ email, password });
  }

  async signUpNewUser(email: string, password: string) {
    return await this.supabase.auth.signUp({
      email: email,
      password: password,
    })
  }

  async getSession(token) {
    const { data, error } = await this.supabase.auth.getUser(token);
    console.log('Data:', data);
    console.log('Error:', error);
    if (error || !data) {
      return false;
    }
    const userId = data.user.id;
    
    const query = await this.supabase
    .from('rolesxusuarios')
    .select('*', { count: 'exact' })  // Obtiene también el número de filas encontradas
    .eq('user_id', userId);

    const { data: userRole ,error: errorxUser } = query;

    if (errorxUser || !userRole) {
      return false;
    }

    return {...data, roleApp: userRole};
  }
}
