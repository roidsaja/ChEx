<script lang="ts">
	export const prerender = true;
	import { pokemon } from '../lib/store/pokestore';

	let search = '';
	let filteredPokemon = [];

	// useEffect() but in Svelte syntax
	$: {
		search
			? (filteredPokemon = $pokemon.filter((pkmn) => pkmn.name.includes(search.toLowerCase())))
			: (filteredPokemon = [...$pokemon]);
	}
</script>

<svelte:head>
	<title>Svelte Pokedex</title>
</svelte:head>

<input type="text" placeholder="Search a Pokemon" bind:value={search} />

<section>
	{#each filteredPokemon as pkmn}
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
