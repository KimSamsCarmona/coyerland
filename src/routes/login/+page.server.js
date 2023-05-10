import { fail } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, url, locals: { supabase } }) => {
		const body = Object.fromEntries(await request.formData());
		const email = body.email;

		const { error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				emailRedirectTo: `${url.origin}/logging-in`
			}
		});

		if (error) {
			return fail(400, {
				error: error.message,
				values: { email }
			});
		}

		return {
			success: true,
			message: 'Please check your email for a magic link to log into the website.'
		};
	}
};
