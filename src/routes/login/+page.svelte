<script>
	import coyer from '../../lib/assets/COYER-2022.jpg';
</script>

<div class="min-h-full flex flex-col justify-between overflow-x-hidden">
	<nav class="nav navbar bg-base-100 border-b">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">COYERLand</a>
		</div>
	</nav>
	<div class="py-4">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="flex flex-col items-center h-full w-full">
				<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
					Request Magic Link to Login & Play COYERLand
				</h2>
				<p>
					After successful submission, you will be redirected to the home page. Please check your
					email for a magic link to gain access.
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
					<div class="w-full max-w-md pt-2">
						<button type="submit" class="btn btn-primary w-full">Login</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.nav {
		/* background-color: #f5f5f5; */
		/* background-color: rgba(255, 255, 255, 0.5); */
		backdrop-filter: blur(50px);
	}
</style>
