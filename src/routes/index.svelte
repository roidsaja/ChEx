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
	<title>Svelte ChEx</title>
</svelte:head>

<input type="text" placeholder="Search a Pokemon" bind:value={search} />

<section>
	{#each filteredPokemon as pkmn}
		<div class="card">
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
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.card {
		display: flex;
		margin-right: 0.5rem;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
		border: 1px solid #ffffff;
		border-radius: 10px;
		background: white;
	}

	.card > a > img {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
</style>
