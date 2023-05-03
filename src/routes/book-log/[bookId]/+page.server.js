import { serializeNonPOJOs } from '$lib/utils.js';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	try {
		const book = serializeNonPOJOs(await locals.pb.collection('books').getOne(params.bookId));

		if (locals.user.id === book.user) {
			console.log('this is', book);
			return {
				book
			};
		} else {
			throw error(403, 'Forbidden');
		}
	} catch (err) {
		console.log('Error: ', err);
		throw error(err.status, err.message);
	}

};

export const actions = {
	updateBook: async ({ request, locals, params }) => {
		const formData = await request.formData();
		try {
			await locals.pb.collection('books').update(params.bookId, formData);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/book-log');
	}
};
