<script>
	import { MyBookItem } from '$lib/components';
	import coyer from '../../lib/assets/COYER-2022.jpg';

	export let data;
	let spaces;
	$: ({ books, user } = data);
	$: spaces = sumBookSpaces(data.books);

	function sumBookSpaces(books) {
		let sum = 0;
		for (let i = 0; i < books.length; i++) {
			sum += parseInt(books[i].spaces);
		}
		return sum;
	}
</script>

<div class="min-h-full flex flex-col justify-between overflow-x-hidden">
	<nav class="nav navbar bg-base-100 border-b">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">COYERLand</a>
		</div>
		<div>
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
		<div class="mx-2 max-w-7xl sm:px-6 lg:px-8">
			<div class="w-full h-28 flex items-center justify-between">
				<div class="flex flex-col w-full ml-4 h-full justify-center">
					<h2 class="text-3xl font-bold">Book List</h2>
					<h3>Total Spaces = {spaces}</h3>
               {#if books.length > 0}
					<div class="flex items-center justify-end w-full">
						<a href="/book-log/new" class="btn new">Log New Book</a>
					</div>
               {/if}
				</div>
			</div>
			<div class="w-full mt-4 flex flex-col items-center">
				{#if books.length === 0}
					<p class="text-center text-3xl">😥</p>
					<p class="text-center text-3xl">Looks like you don't have any Books.</p>
					<a href="/book-log/new" class="btn btn-primary max-w-md mt-4">Add One</a>
				{:else}
					{#each books as book}
						<MyBookItem {book} />
						<div class="divider mt-0 mb-2" />
					{/each}
				{/if}
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
		background-color: #f5f5f5;
		/* background-color: rgba(255, 255, 255, 0.5); */
		backdrop-filter: blur(50px);
	}
	.new {
		background-color: #543278;
		color: white;
		font-weight: 700;
		font-size: 16px;
	}
</style>
