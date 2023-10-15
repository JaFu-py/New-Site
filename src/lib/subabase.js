import {SupabaseClient} from "@supabase/supabase-js";

const env = import.meta.viteUserConfig
const subabase = new SupabaseClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);



export default supabase;