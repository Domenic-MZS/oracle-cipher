<script lang="ts">
	import Button from './Button.svelte';

	export let message: string;

	$: hasMessage = message.length >= 1;
	$: title = hasMessage ? 'Mensaje:' : 'Ningun mensaje fue encontrado!';

	const copyText = () => navigator.clipboard.writeText(message);
</script>

<article class="result" id="result">
	{#if !hasMessage}
		<img
			class="result__hero unselectable"
			draggable="false"
			src="/hero.png"
			alt="Busqueda"
			aria-hidden="true"
		/>
	{/if}
	<h4 class="result__title">{title}</h4>
	<p class="result__text">
		{#if hasMessage}
			{message}
		{:else}
			Ingresa el texto que desees encriptar o desencriptar...
		{/if}
	</p>

	{#if hasMessage}
		<Button on:click={copyText} dataAction="copy">Copiar</Button>
	{/if}
</article>

<style lang="scss">
	.result {
		height: 100%;
		border: 1px solid rgba(0, 0, 0, 0.25);
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		padding: var(--size-300);
		margin-top: var(--size-300);
		background-color: var(--bg-white);
		border-radius: var(--size-300);
		display: grid;
		place-items: center;

		&__title {
			font-size: 1.2rem;
			font-weight: 700;
			text-align: center;
		}

		&__text {
			text-align: center;
			font-size: smaller;
			width: 100%;
			word-break: break-word;
			max-height: 15rem;
			overflow-y: auto;
		}

		&__hero {
			margin-inline: auto;
			display: none;
		}

		:global(button) {
			margin-top: var(--size-300);
			width: 80%;
		}
	}

	@media screen and (min-width: 26em) {
		.result__hero {
			display: block;
		}
	}
</style>
