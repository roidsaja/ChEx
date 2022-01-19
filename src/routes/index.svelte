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
	<title>ChEx</title>
</svelte:head>

<div class="form-control">
	<div class="relative justify-center">
		<input
			type="text"
			class="w-full pr-16 input input-primary input-bordered"
			placeholder="Search a Pokemon"
			bind:value={search}
		/>
	</div>
</div>

<section class="flex flex-row justify-center items-center flex-wrap">
	{#each filteredPokemon as pkmn}
		<div class="card image-full m-7 cursor-pointer">
			<a href={`/pokemon/${pkmn.id}`} class="card-body">
				<figure>
					<img alt={pkmn.name} src={pkmn.image} />
				</figure>
				<h1 class="card-title m-auto text-base">{pkmn.name.toUpperCase()}</h1>

				<div class="card-actions m-auto">
					<a href={`/pokemon/${pkmn.id}`} class="btn btn-primary">More Info</a>
				</div>
			</a>
		</div>
	{/each}
</section>
