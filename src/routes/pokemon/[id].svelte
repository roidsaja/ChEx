<script context="module" lang="ts">
	import axios from 'axios';
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const { data } = await axios.get(url);
		return { props: { data } };
	}
</script>

<script lang="ts">
	export let data: {
		name: string;
		sprites: {
			front_default: string;
			back_default: string;
			front_shiny: string;
			back_shiny: string;
		};
		weight: string;
		height: string;
		base_experience: string;
		types: [
			type: {
				name: string;
			}
		];
	};
	export let types = data.types;
</script>

<section>
	<h1>Pokemon Profile</h1>
	<h2>Name: {data.name}</h2>
	<div>
		{#each types as { type }}
			<p>{type.name}</p>
		{/each}
	</div>
	<div>
		<img alt={data.name} src={data.sprites.front_default} />
		<img alt={data.name} src={data.sprites.back_default} />
		<img alt={data.name} src={data.sprites.front_shiny} />
		<img alt={data.name} src={data.sprites.back_shiny} />
	</div>
	<div>
		<p>Weight: {data.weight}</p>
		<p>Height: {data.height}</p>
		<p>Base Experience: {data.base_experience}</p>
	</div>
</section>
