<script lang="ts">
	export const prerender = true;
	import { pokemon } from '../lib/store/pokestore';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#each $pokemon as pkmn}
		<h1>{pkmn.name}</h1>
		<img alt={pkmn.name} src={pkmn.image} />
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
