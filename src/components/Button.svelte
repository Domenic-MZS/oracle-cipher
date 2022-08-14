<script lang="ts">
	export let dataAction: string;
	export let filled: boolean = false;
</script>

<button
    on:click
	data-action={dataAction}
	aria-controls="results"
	class="btn  | {filled && 'bg-blue-500 fc-white'}"
>
	<slot />
</button>

<style lang="scss">
	.btn {
		display: inline;
		border: 1px solid var(--blue-500);
		border-radius: var(--size-200);
		padding: 0.25em 1em;
		transition: transform 0.2s ease-in-out;

		&:hover,
		&:focus,
		&:active {
			cursor: pointer;
			border: 1px solid var(--blue-400);
			transform: scale(1.012);
		}
	}
</style>
