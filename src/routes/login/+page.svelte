<script>
	import coyer from '../../lib/assets/COYER-2022.jpg';

	export let form;
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
							<img src={coyer} alt="avatar" />
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
			<div class="flex flex-col items-center h-full w-full">
				<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
					Login to Play COYERLand
				</h2>
				<p class="text-center mt-1">
					Or <a
						href="/register"
						class="text-primary font-medium hover:cursor-pointer hover:underline">register</a
					> if you don't have an account.
				</p>
				<form
					action="?/login"
					method="POST"
					class="flex flex-col items-center space-y-2 w-full pt-4"
				>
					<div class="form-control w-full max-w-md">
						<label for="email" class="label font-medium pb-1">
							<span class="label-text">Email</span>
						</label>
						<input type="email" name="email" class="input input-bordered w-full max-w-md" />
					</div>
					<div class="form-control w-full max-w-md">
						<label for="password" class="label font-medium pb-1">
							<span class="label-text">Password</span>
						</label>
						<input type="password" name="password" class="input input-bordered w-full max-w-md" />
					</div>
					<div class="w-full max-w-md">
						<a
							href="/reset-password"
							class="font-medium text-primary hover:cursor-pointer hover:underline"
						>
							Forgot Password</a
						>
					</div>
					<div class="w-full max-w-md pt-2">
						<button type="submit" class="btn btn-primary w-full">Login</button>
					</div>
					{#if form?.notVerified}
						<div class="alert alert-error shadow-lg w-full max-w-md">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="stroke-current flex-shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
									/></svg
								>
								<span>You must verify your email before you can login.</span>
							</div>
						</div>
					{/if}
				</form>
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
