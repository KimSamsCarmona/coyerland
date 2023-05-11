<script>
	import { Modal } from '$lib/components';

	export let book;
	let modalOpen;

	$: modalOpen = false;
</script>

<div class="w-full h-28 flex items-center justify-between">
	<div class="flex flex-col w-full ml-4 h-full justify-center">
		<a href="/book-log/{book.id}" class="font-semibold text-lg">{book.title}</a>
		<p>Linky Number: {book.linky_number}</p>
		<p>Category: {book.category}</p>
		<p>Spaces Earned: {book.spaces}</p>
	</div>
	<div class="flex items-center justify-end w-full">
		<a href="/book-log/{book.id}" class="btn btn-outline">Edit In Book Log</a>
		<Modal label={book.id} checked={modalOpen}>
			<span slot="trigger" class="btn btn-error ml-2">Delete</span>
			<div slot="heading">
				<h3 class="text-2xl">Delete {book.title}</h3>
				<p class="text-base font-normal mt-2">
					Are you sure you want to delete this book? Once deleted, the book cannot be restored.
				</p>
			</div>
			<div slot="actions" class="flex w-full items-center justify-center space-x-2">
				<label for={book.id} class="btn btn-outline">Cancel</label>
				<form action="?/deleteBook" method="POST">
					<input type="hidden" name="id" value={book.id} />
					<button type="submit" class="btn btn-error">Delete</button>
				</form>
			</div>
		</Modal>
	</div>
</div>
