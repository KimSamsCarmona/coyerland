import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient(
	'https://zcoeclocmqljsqxnmdlo.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjb2VjbG9jbXFsanNxeG5tZGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzODE5MjAsImV4cCI6MTk5ODk1NzkyMH0.OkkxlEMeJWoGeKt_Is2pHQJc9RWwxWVYnIuTavVhxtY'
);
