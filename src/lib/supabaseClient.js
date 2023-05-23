import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://enikswebefbtdchwixmy.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuaWtzd2ViZWZidGRjaHdpeG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NDY1ODIsImV4cCI6MjAwMDQyMjU4Mn0.iESzv2HPChP_QXs3gpXubMiTqZS-deRTdnGnwjMOxDM';

export const supabase = createClient(supabaseUrl, supabaseKey);
