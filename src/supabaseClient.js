import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://sbnbfpihfhsyctumpqod.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_sIuxvx0e_w3AO7eYsDkUOw_Y0SiGcL0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
