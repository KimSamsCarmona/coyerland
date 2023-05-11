import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}
};

export const actions = {
	create: async ({ request, locals: { supabase, getSession } }) => {
		const formData = Object.fromEntries(await request.formData());
		const session = await getSession();
		console.log(
			'formData:',
			formData.title,
			formData.linky_number,
			formData.category,
			formData.spaces
		);

		const { error } = await supabase.from('books').insert([
			{
				user_id: session?.user.id,
				title: formData.title,
				linky_number: formData.linky_number,
				category: formData.category,
				spaces: formData.spaces
			}
		]);

		console.log({ error });

		if (error) {
			return fail(500, {
				title: formData.title,
				linky_number: formData.linky_number,
				category: formData.category,
				spaces: formData.spaces
			});
		}

		return {
			title: formData.title,
			linky_number: formData.linky_number,
			category: formData.category,
			spaces: formData.spaces
		};
	}
};
