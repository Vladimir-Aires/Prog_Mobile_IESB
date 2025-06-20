// config/supabase.js
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importante para React Native

const supabaseUrl = 'https://mcuudumtyoolqpgmhmbj.supabase.co'; // Ex: 'https://xyzabcdefg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jdXVkdW10eW9vbHFwZ21obWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDkwMjgsImV4cCI6MjA2NTkyNTAyOH0.LZK8n3rzcPpTV40SavjwXf12Gb7AO8rkTXHxEDvuIN4'; // Ex: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emFiY2RlZmciLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY3ODAwMDAwMCwiZXhwIjoxOTczMDAwMDAwfQ.suachaveanon'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage, // Use AsyncStorage para persistir a sessão do usuário
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});