<script>
	import coyer from '../../lib/assets/COYER-2022.jpg';

	import space01 from '../../lib/assets/space01@3x.png';
	import space02 from '../../lib/assets/space02@3x.png';
	import space03 from '../../lib/assets/space03@3x.png';
	import space04 from '../../lib/assets/space04@3x.png';
	import space05 from '../../lib/assets/space05@3x.png';
	import space06 from '../../lib/assets/space06@3x.png';
	import space07 from '../../lib/assets/space07@3x.png';
	import space08 from '../../lib/assets/space08@3x.png';
	import space09 from '../../lib/assets/space09@3x.png';
	import space10 from '../../lib/assets/space10@3x.png';

	import space11 from '../../lib/assets/space11@3x.png';
	import space12 from '../../lib/assets/space12@3x.png';
	import space13 from '../../lib/assets/space13@3x.png';
	import space14 from '../../lib/assets/space14@3x.png';
	import space15 from '../../lib/assets/space15@3x.png';
	import space16 from '../../lib/assets/space16@3x.png';
	import space17 from '../../lib/assets/space17@3x.png';
	import space18 from '../../lib/assets/space18@3x.png';
	import space19 from '../../lib/assets/space19@3x.png';
	import space20 from '../../lib/assets/space20@3x.png';

	import space21 from '../../lib/assets/space21@3x.png';
	import space22 from '../../lib/assets/space22@3x.png';
	import space23 from '../../lib/assets/space23@3x.png';
	import space24 from '../../lib/assets/space24@3x.png';
	import space25 from '../../lib/assets/space25@3x.png';
	import space26 from '../../lib/assets/space26@3x.png';
	import space27 from '../../lib/assets/space27@3x.png';
	import space28 from '../../lib/assets/space28@3x.png';
	import space29 from '../../lib/assets/space29@3x.png';
	import space30 from '../../lib/assets/space30@3x.png';

	import space31 from '../../lib/assets/space31@3x.png';
	import space32 from '../../lib/assets/space32@3x.png';
	import space33 from '../../lib/assets/space33@3x.png';
	import space34 from '../../lib/assets/space34@3x.png';
	import space35 from '../../lib/assets/space35@3x.png';
	import space36 from '../../lib/assets/space36@3x.png';
	import space37 from '../../lib/assets/space37@3x.png';
	import space38 from '../../lib/assets/space38@3x.png';
	import space39 from '../../lib/assets/space39@3x.png';
	import space40 from '../../lib/assets/space40@3x.png';

	import space41 from '../../lib/assets/space41@3x.png';
	import space42 from '../../lib/assets/space42@3x.png';

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
			<div>
				<p class="location">Location</p>
				{#if spaces == 0}
					<h2 class="genre">Start</h2>
				{:else if spaces > 0 && spaces <= 11}
					<h2 class="genre">Romance Beach</h2>
				{:else if spaces > 11 && spaces <= 21}
					<h2 class="genre">Horror Woods</h2>
				{:else if spaces > 21 && spaces <= 31}
					<h2 class="genre">Sci-Fi's Orbit</h2>
				{:else if spaces > 31 && spaces <= 41}
					<h2 class="genre">Cliff's of Fantasy</h2>
				{:else if spaces > 41}
					<h2 class="genre">You Won!</h2>
				{/if}
			</div>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn btn-primary">Register</a>
				</div>
			{:else}
				<div class="dropdown dropdown-end mr-4">
					<a href="/book-log" class="btn button h-10 sm:btn-wide">Book List</a>
				</div>
				<div class="dropdown dropdown-end menu">
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
			{#if spaces == 0}
				<img src={space01} alt="1 space" class="object-cover w-full h-full" />
			{:else if spaces == 1}
				<img src={space02} alt="2 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 2}
				<img src={space03} alt="3 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 3}
				<img src={space04} alt="4 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 4}
				<img src={space05} alt="5 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 5}
				<img src={space06} alt="6 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 6}
				<img src={space07} alt="7 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 7}
				<img src={space08} alt="8 spaces" vclass="object-cover w-full h-full" />
			{:else if spaces == 8}
				<img src={space09} alt="9 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 9}
				<img src={space10} alt="10 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 10}
				<img src={space11} alt="11 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 11}
				<img src={space12} alt="12 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 12}
				<img src={space13} alt="13 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 13}
				<img src={space14} alt="14 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 14}
				<img src={space15} alt="15 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 15}
				<img src={space16} alt="16 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 16}
				<img src={space17} alt="17 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 17}
				<img src={space18} alt="18 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 18}
				<img src={space19} alt="19 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 19}
				<img src={space20} alt="20 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 20}
				<img src={space21} alt="21 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 21}
				<img src={space22} alt="22 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 22}
				<img src={space23} alt="23 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 23}
				<img src={space24} alt="24 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 24}
				<img src={space25} alt="25 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 25}
				<img src={space26} alt="26 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 26}
				<img src={space27} alt="27 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 27}
				<img src={space28} alt="28 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 28}
				<img src={space29} alt="29 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 29}
				<img src={space30} alt="30 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 30}
				<img src={space31} alt="31 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 31}
				<img src={space32} alt="32 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 32}
				<img src={space33} alt="33 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 33}
				<img src={space34} alt="34 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 34}
				<img src={space35} alt="35 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 35}
				<img src={space36} alt="36 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 36}
				<img src={space37} alt="37 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 37}
				<img src={space38} alt="38 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 38}
				<img src={space39} alt="39 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 39}
				<img src={space40} alt="40 spaces" class="object-cover w-full h-full" />
			{:else if spaces == 40}
				<img src={space41} alt="41 spaces" class="object-cover w-full h-full" />
			{:else if spaces >= 41}
				<img src={space42} alt="42 spaces" class="object-cover w-full h-full" />
			{/if}
			<a href="/book-log/new" class="btn btn-floating float">Log Book</a>
		</div>
	</div>
</div>

<style>
	.button {
		background-color: #ddccf0;
		color: #212121;
		/* font-family:  */
	}

	.location {
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		padding-left: 100px;
	}

	.genre {
		font-style: normal;
		font-weight: 800;
		font-size: 20px;
		line-height: 20px;
		padding-right: 24px;
		padding-left: 100px;
	}

	.menu {
		padding-right: 100px;
	}

	@media (max-width: 768px) {
		.location {
			padding-left: 50px;
		}

		.genre {
			padding-left: 50px;
		}
		.menu {
			padding-right: 50px;
		}
	}

	@media (max-width: 480px) {
		.location {
			padding-left: 20px;
		}

		.genre {
			padding-left: 20px;
		}

		.menu {
			padding-right: 20px;
		}
	}
	.nav {
		background-color: #f5f5f5;
		/* background-color: rgba(255, 255, 255, 0.5); */
		backdrop-filter: blur(50px);
	}
	.float {
		position: fixed;
		bottom: 45px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 9999;
		background-color: #543278;
		color: white;
		font-weight: 700;
		font-size: 20px;
		height: 60px;
		width: 75%;
	}
</style>
