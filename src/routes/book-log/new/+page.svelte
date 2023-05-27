<script>
	import { Input } from '$lib/components';
	import coyer from '../../../lib/assets/COYER-2022.jpg';

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

	let selectedOption = '';

	function getNumberForOption(selectedOption) {
		switch (selectedOption) {
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

	// generate surprise data
	function rollDice() {
		return Math.floor(Math.random() * 3) + 1;
	}

	function generateSurprise() {
		const options = [
			{
				title: 'Awesome! Portal!',
				category: 'Surprise',
				spaces: rollDice()
			},
			{
				title: 'Oh No! Storm!',
				category: 'Surprise',
				spaces: -rollDice()
			},
			{
				title: 'Good Job!',
				category: 'Surprise',
				spaces: 0
			}
		];
		const randomIndex = Math.floor(Math.random() * options.length);
		const surpriseData = options[randomIndex];

		const hiddenFields = [
			{
				name: 'surpriseTitle',
				value: surpriseData.title
			},
			{
				name: 'surpriseCategory',
				value: surpriseData.category
			},
			{
				name: 'surpriseSpaces',
				value: surpriseData.spaces
			}
		];

		return { surpriseData, hiddenFields };
	}

	const { surpriseData, hiddenFields } = generateSurprise();
</script>

<div class="min-h-full flex flex-col justify-between overflow-x-hidden">
	<nav class="nav navbar bg-base-100 border-b">
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">COYERLand</a>
		</div>
		<div>
			<div class="dropdown dropdown-end mr-4">
				<a href="/play" class="btn button sm:btn-wide">View Game!</a>
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
			<div class="flex flex-col w-full h-full p-2">
				<div class="w-full">
					<form
						action="?/create"
						method="POST"
						class="flex flex-col space-y-2 w-full items-center"
						enctype="multipart/form-data"
					>
						<h3 class="text-3xl font-bold">Log New Book</h3>
						<p class="mt-2 text-lg">
							We'll need the book title, number in the <a
								href="https://coyerchallenge.blogspot.com/p/coyer-2023-linky.html">COYER Linky</a
							>, and spaces earned category.
						</p>
						<Input id="title" label="Book Title" type="text" />
						<div class="form-control w-full max-w-lg mb-2">
							<label for="category" class="label font-medium pb-1">
								<span class="label-text">Category</span>
							</label>
							<div class="relative">
								<select class="input input-bordered w-full max-w-lg" bind:value={selectedOption}>
									{#each options as option}
										<option id="category2" value={option}>{option}</option>
									{/each}
								</select>
								{#if selectedOption}
									<p class="text-xs text-gray-500 mt-1">
										{#if selectedOption === 'free book'}
											Free books (any format, but must be owned by you… no library, subscriptions,
											etc)
										{:else if selectedOption === 'nearly free book'}
											This is less than $1 print/eBook, or $3 audiobooks (still any format, but
											still must be owned by you… no library, subscriptions, etc)
										{:else if selectedOption === 'sale book'}
											This is less than $5 print/eBook, or $7.50 audiobooks (still any format, but
											still must be owned by you… no library, subscriptions, etc)
										{:else if selectedOption === 'library book'}
											This book is from the library. Still any format.
										{:else if selectedOption === 'ARC'}
											This is an advanced reader copy. Still any format.
										{:else if selectedOption === 'borrowed book'}
											This book is borrowed from someone. Still any format.
										{:else if selectedOption === 'subscription book'}
											This book is part of a subscription service like KU, Prime, Scribd, Audible+,
											etc (still any format)
										{:else}
											Any book, any format, any LEGAL means of obtaining, any price.
										{/if}
									</p>
								{/if}
							</div>
						</div>
						<input type="hidden" name="category" value={selectedOption} />
						<Input
							label="Spaces Earned"
							type="text"
							value={getNumberForOption(selectedOption)}
							disabled
						/>
						<input type="hidden" name="spaces" value={getNumberForOption(selectedOption)} />
						<Input id="linky_number" label="Linky Number" type="number" />
						{#each hiddenFields as { name, value }}
							<input type="hidden" {name} {value} />
						{/each}
						<div class="w-full max-w-lg pt-3">
							<button type="submit" class="btn new w-full max-w-lg">Log Book Read</button>
							<a href="/book-log/" class="btn btn-outline w-full max-w-lg">Cancel</a>
						</div>
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
	.new {
		background-color: #543278;
		color: white;
		font-weight: 700;
		font-size: 16px;
	}
</style>
