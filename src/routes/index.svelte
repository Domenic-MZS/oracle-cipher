<script lang="ts">
	// Components
	import HelperText from '../components/HelperText.svelte';
	import Result from '../components/Result.svelte';
	import Button from '../components/Button.svelte';

	// Logic
	import { cipher, decipher } from '../cipher/cipher';

	// State
	let value = '';
	let message = '';

	const encrypt = () => (message = cipher(value));
	const decrypt = () => (message = decipher(value));
</script>

<svelte:head>
	<title>Svelte Cipher</title>
</svelte:head>

<main class="container">
	<div class="even-columns">
		<section class="content">
			<textarea
				bind:value
				placeholder="Ingrese el texto aqui..."
				name="input-message"
				id="input-message"
				cols="30"
				rows="10"
			/>

			<HelperText>Solo letras en minusculas y sin acentos</HelperText>

			<div class="actions">
				<Button on:click={encrypt} filled dataAction="encrypt">Encriptar</Button>
				<Button on:click={decrypt} dataAction="decrypt">Desencriptar</Button>
			</div>
		</section>

		<section class="results">
			<Result {message} />
		</section>
	</div>
</main>
