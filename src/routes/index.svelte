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
		<div>
			<a href={`/pokemon/${pkmn.id}`}>
				<h1>{pkmn.name}</h1>
				<img alt={pkmn.name} src={pkmn.image} />
			</a>
		</div>
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
</style>
