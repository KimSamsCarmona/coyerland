import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/login');
	}
};

export const actions = {
	create: async ({ request, locals: { supabase, getSession } }) => {
		const formData = Object.fromEntries(await request.formData());
		const session = await getSession();

		const bookData = {
			user_id: session?.user.id,
			title: formData.title,
			linky_number: formData.linky_number,
			category: formData.category,
			spaces: formData.spaces,
			is_surprise: false
		};

		const surpriseData = {
			user_id: session?.user.id,
			title: formData.surpriseTitle,
			linky_number: '',
			category: formData.surpriseCategory,
			spaces: formData.surpriseSpaces,
			is_surprise: true
		};

		const { error: bookError } = await supabase.from('books').insert([bookData]);
		const { error: surpriseError } = await supabase.from('books').insert([surpriseData]);

		if (bookError || surpriseError) {
			return fail(500, {
				bookData,
				surpriseData
			});
		}

		throw redirect(303, '/play?surprise');
	}
};
