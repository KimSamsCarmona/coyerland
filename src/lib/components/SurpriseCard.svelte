<script>
	import { Modal } from '$lib/components';
	import { Icon, FaceSmile, FaceFrown, CheckBadge } from 'svelte-hero-icons';
	import { onMount } from 'svelte';

	export let modalOpen;
	export let surpriseTitle;
	export let surpriseSpaces;
</script>

<Modal label={surpriseTitle} checked={modalOpen}>
	<div slot="heading">
		<h3 class="text-2xl">{surpriseTitle}</h3>
		<div class="icon-container">
			{#if surpriseSpaces > 0}
				<p class="text-base font-normal mt-2">
					You landed you on a portal! Move forward {surpriseSpaces} spaces!
				</p>
				<div class="icon-wrapper">
					<Icon src={FaceSmile} alt="happy face" size="6rem" class="text-amber-300" />
				</div>
			{:else if surpriseSpaces < 0}
				<p class="text-base font-normal mt-2">
					You landed you in a storm! You have to go back {Math.abs(surpriseSpaces)} spaces. Keep at it
					though!
				</p>
				<div class="icon-wrapper">
					<Icon src={FaceFrown} alt="frown face" size="6rem" class="text-sky-600" />
				</div>
			{:else}
				<p class="text-base font-normal mt-2">You're doing great, keep reading!</p>
				<div class="icon-wrapper">
					<Icon src={CheckBadge} alt="checkmark badge" size="6rem" class="text-emerald-400" />
				</div>
			{/if}
			<button class="close-button" aria-label="close" on:click={() => (modalOpen = false)}>
				Continue
			</button>
		</div>
	</div>
</Modal>

<style>
	.close-button {
		margin-top: 57px;
		margin-bottom: 27px;
		padding: 0.5rem 1rem;
		background-color: #543278;
		color: white;
		border: none;
		border-radius: 32px;
		cursor: pointer;
		font-size: 16px;
		font-weight: 700;
		height: 60px;
		width: 75%;
	}
	.icon-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.icon-wrapper {
		display: flex;
		align-items: center;
		margin-top: 52px;
	}
</style>
