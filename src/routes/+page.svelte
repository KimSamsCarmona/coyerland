<script>
	import { page } from '$app/stores';
	import coyer from '../lib/assets/COYER-2022.jpg';
</script>

<div class="min-h-full flex flex-col justify-between overflow-x-hidden">
	<nav class="nav navbar bg-base-100 border-b">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">COYERLand</a>
		</div>
		<div>
			{#if !$page.data.session}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-primary btn-wide">Login</a>
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
							<img src={coyer} />
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
			{/if}
		</div>
	</nav>
	<div class="py-4">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="py-4">
				<div class="mx-2 max-w-7xl sm:px-6 lg:px-8 inline-blick align-middle">
					{#if !$page.data.session}
						<h3 class="text-3xl font-bold text-center">
							Welcome to COYERLand! Login to get started
						</h3>
					{:else}
						<h3 class="text-3xl font-bold text-center">How to Play:</h3>
						<ul class="list-disc">
							<li>
								For all the COYER Chapter two rules go to <a
									href="https://www.becausereading.com/coyer-chapters-time-to-sign-up-for-chapter-2-coyer-chapter-2-starts-may-1st/"
									class="text-primary font-medium hover:cursor-pointer hover:underline"
									>Because Challenges and Sign Up</a
								>
							</li>
							<li>
								<strong>Work your way through the board game earning ‘spaces’ on the board.</strong>
								You can view the board by clicking <a href="/play">View Game</a> at the top of the page.
							</li>
							<li>
								You will move forward, racing towards the finish line by logging books, which you
								can do <a href="/book-log/new">here</a>. Depending on the categories you earn 1, 2,
								3, 4, 5, or 6 spaces on the board. Refer to rules or book log page for the
								categories and space values.
							</li>
							<li>
								After logging your books, check out the board to see your progress! Watch out you
								never know what to expect 😉. In the top left corner, you'll see what part of
								COYERLAND you're in. At the end of Chapter 2 we will have a Rafflecopter where you
								can tell us if you finished the game or what part of COYERLAND you're in to earn
								points in the <strong>bonus</strong> Happy Birthday COYER Rafflecopter!
							</li>
						</ul>
						<h3 class="text-3xl font-bold text-center">We Hope You Have Fun!</h3>
					{/if}
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
