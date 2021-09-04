import { createClient } from '@supabase/supabase-js';
import CONFIG from '../config';

const supabase = createClient(
  CONFIG.SUPABASE_PUBLIC_URL,
  CONFIG.SUPABASE_PUBLIC_KEY
);

export { supabase };
