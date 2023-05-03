<script>
	import { page } from '$app/stores';
	import coyer from '../../lib/assets/COYER-2022.jpg';

	const navigation = [
		{
			title: 'Profile',
			href: '/settings/profile'
		},
		{
			title: 'Account',
			href: '/settings/account'
		},
		{
			title: 'Security',
			href: '/settings/security'
		}
	];
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
							<img src={coyer} alt="user avatar" />
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
			<div class="w-full h-full px-2">
				<h3 class="text-2xl font medium">Settings</h3>
				<div class="divider" />
			</div>
			<div class="flex w-full h-full space-x-4">
				<ul class="menu bg-base-100 w-56 p-2 rounded-box">
					{#each navigation as navItem}
						<li>
							<a
								href={navItem.href}
								class="font-medium {$page.url.pathname === navItem.href ? 'active' : ''}"
								>{navItem.title}</a
							>
						</li>
					{/each}
				</ul>
				<div class="w-full">
					<slot />
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
