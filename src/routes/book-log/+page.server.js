import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/login');
	}

	let { data: books, error } = await supabase
		.from('books')
		.select('*')
		.eq('user_id', session?.user.id);

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

// export const actions = {
// 	deleteBook: async ({ request, locals }) => {
// 		const { id } = Object.fromEntries(await request.formData());

// 		try {
// 			await locals.pb.collection('books').delete(id);
// 		} catch (err) {
// 			console.log('Error: ', err);
// 			throw error(err.status, err.message);
// 		}
// 		return {
// 			success: true
// 		};
// 	}
// };
