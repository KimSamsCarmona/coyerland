<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import coyer from '../../lib/assets/COYER-2022.jpg';

	$: {
		const redirectTo = $page.url.searchParams.get('redirect');

		// check if user has been set in session store then redirect
		if ($page.data.session) {
			goto(redirectTo ?? '/');
		}
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
					<h2 class="text-3xl font-bold">You're being logged in! Enjoy your Game!</h2>
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
		background-color: #f5f5f5;
		/* background-color: rgba(255, 255, 255, 0.5); */
		backdrop-filter: blur(50px);
	}
</style>
