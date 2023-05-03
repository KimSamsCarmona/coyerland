import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	const getUsersBooks = async (userId) => {
		try {
			const books = serializeNonPOJOs(
				await locals.pb.collection('books').getFullList(undefined, {
					filter: `user = "${userId}"`
				})
			);
			return books;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	const books = await getUsersBooks(locals.user.id);
	return {
		books: books.length > 0 ? books : []
	};
};