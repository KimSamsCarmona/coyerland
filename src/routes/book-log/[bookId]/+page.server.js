import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession }, params }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/login');
	}

	let { data: books, error } = await supabase.from('books').select('*').eq('id', params.bookId);

	if (error) {
		return fail(500, {
			books
		});
	}
	return {
		books,
		user: session?.user.id
	};
};

export const actions = {
	updateBook: async ({ request, locals: { supabase, getSession }, params }) => {
		const formData = Object.fromEntries(await request.formData());
		const session = await getSession();

		const { data, error } = await supabase
			.from('books')
			.update({
				title: formData.title,
				linky_number: formData.linky_number,
				category: formData.category,
				spaces: formData.spaces
			})
			.eq('id', params.bookId)
			.select();

		if (error) {
			console.log(error);
			return fail(500, {
				title: formData.title,
				linky_number: formData.linky_number,
				category: formData.category,
				spaces: formData.spaces
			});
		}

		console.log('success', formData.title, formData.linky_number, formData.category, formData.spaces);
		return {
			title: formData.title,
			linky_number: formData.linky_number,
			category: formData.category,
			spaces: formData.spaces,
			user: session?.user.id
		};
	}
};
