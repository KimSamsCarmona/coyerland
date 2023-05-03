<script>
	import { Input } from '$lib/components';
	import coyer from '../../../lib/assets/COYER-2022.jpg';

	export let data;
</script>

<div class="min-h-full flex flex-col justify-between overflow-x-hidden">
	<nav class="nav navbar bg-base-100 border-b">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">COYERLand</a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn btn-primary">Register</a>
				</div>
			{:else}
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
							<a href="/settings/profile">Settings</a>
						</li>
						<li>
							<form action="/logout" method="POST">
								<button type="submit" class="w-full text-start">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
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
							Edit Book Entry for <strong><em>{data.book.title}</em></strong>
						</h3>
						<Input id="title" label="Book Title" value={data.book.title ?? ''} />
						<Input id="linky_number" label="Linky Number" value={data.book.linky_number ?? ''} />
						<Input id="spaces" label="spaces" value={data.book.spaces ?? ''} />
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
