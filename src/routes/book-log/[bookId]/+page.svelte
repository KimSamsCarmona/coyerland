<script>
	import { Input } from '$lib/components';
	import coyer from '../../../lib/assets/COYER-2022.jpg';

	export let data;

	$: ({ books, user } = data);

	let options = [
		'free book',
		'nearly free book',
		'sale book',
		'library book',
		'ARC',
		'borrowed book',
		'subscription book',
		'all others'
	];

	function getNumberForOption(option) {
		switch (option) {
			case 'free book':
				return 6;
			case 'nearly free book':
				return 5;
			case 'sale book':
				return 4;
			case 'library book':
				return 3;
			case 'ARC':
				return 3;
			case 'borrowed book':
				return 3;
			case 'subscription book':
				return 2;
			case 'all others':
				return 1;
			default:
				return 0; // Error code for invalid selection
		}
	}
</script>

<div class="min-h-full flex flex-col justify-between overflow-x-hidden">
	<nav class="nav navbar bg-base-100 border-b">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">COYERLand</a>
		</div>
		<div class="flex-none">
			<div class="dropdown dropdown-end mr-4">
				<a href="/play" class="btn button sm:btn-wide">View Game</a>
			</div>
			<div class="dropdown dropdown-end pr-20">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-15 rounded-full">
						<img src={coyer} alt="coyer" />
					</div>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a href="/" class="justify-between">Home</a>
					</li>
					<li>
						<a href="/book-log" class="justify-between">Book Log</a>
					</li>
					<li>
						<form action="/logout" method="POST">
							<button type="submit" class="w-full text-start">Logout</button>
						</form>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<div class="py-4">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="flex flex-col w-full h-full p-2">
				<div class="w-full">
					<form
						method="POST"
						action="?/updateBook"
						class="flex flex-col space-y-2 w-full items-center"
						enctype="multipart/form-data"
					>
						<h3 class="text-3xl font-bold">
							Edit Book Entry for <strong><em>{books[0].title}</em></strong>
						</h3>
						<Input id="title" label="Book Title" value={books[0].title ?? ''} />

						<div class="form-control w-full max-w-lg mb-2">
							<label for="category" class="label font-medium pb-1">
								<span class="label-text">Category</span>
							</label>
							<div class="relative">
								<select class="input input-bordered w-full max-w-lg" bind:value={books[0].category}>
									{#each options as option}
										<option id="category2" value={option}>{option}</option>
									{/each}
								</select>
								{#if books[0].category === 'free book'}
									<p class="text-xs text-gray-500 mt-1">
										Free books (any format, but must be owned by you… no library, subscriptions,
										etc)
									</p>
								{:else if books[0].category === 'nearly free book'}
									<p class="text-xs text-gray-500 mt-1">
										This is less than $1 print/eBook, or $3 audiobooks (still any format, but still
										must be owned by you… no library, subscriptions, etc)
									</p>
								{:else if books[0].category === 'sale book'}
									<p class="text-xs text-gray-500 mt-1">
										This is less than $5 print/eBook, or $7.50 audiobooks (still any format, but
										still must be owned by you… no library, subscriptions, etc)
									</p>
								{:else if books[0].category === 'library book'}
									<p class="text-xs text-gray-500 mt-1">
										This book is from the library. Still any format.
									</p>
								{:else if books[0].category === 'ARC'}
									<p class="text-xs text-gray-500 mt-1">
										This is an advanced reader copy. Still any format.
									</p>
								{:else if books[0].category === 'borrowed book'}
									<p class="text-xs text-gray-500 mt-1">
										This book is borrowed from someone. Still any format.
									</p>
								{:else if books[0].category === 'subscription book'}
									<p class="text-xs text-gray-500 mt-1">
										This book is part of a subscription service like KU, Prime, Scribd, Audible+,
										etc (still any format)
									</p>
								{:else}
									<p class="text-xs text-gray-500 mt-1">
										Any book, any format, any LEGAL means of obtaining, any price.
									</p>
								{/if}
							</div>
						</div>
						<input type="hidden" name="category" value={books[0].category} />
						<Input
							label="Spaces Earned"
							type="text"
							value={getNumberForOption(books[0].category)}
							disabled
						/>
						<input type="hidden" name="spaces" value={getNumberForOption(books[0].category)} />
						<Input id="linky_number" label="Linky Number" value={books[0].linky_number ?? ''} />
						<button type="submit" class="btn btn-primary w-full max-w-lg">Save Changes</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.button {
		background-color: #ddccf0;
		color: #212121;
		/* font-family:  */
	}

	.nav {
		/* background-color: #f5f5f5; */
		/* background-color: rgba(255, 255, 255, 0.5); */
		backdrop-filter: blur(50px);
	}
</style>
