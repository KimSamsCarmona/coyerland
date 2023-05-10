import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load = async (event) => {
	console.log('Ran layout load');
	return {
		sesion: await getServerSession(event)
	};
};
