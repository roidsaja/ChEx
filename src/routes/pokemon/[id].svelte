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
	<div class="card glass text-neutral-content">
		<h1 class="text-xl text-center font-bold p-2">{data.name.toUpperCase()}</h1>
		<div class="flex flex-row space-x-2">
			<!-- I'm sure there is a better way of approaching this, but for now this will do ehe -->
			{#each types as { type }}
				{#if type.name === 'normal'}
					<p class="badge text-sm text-center text-gray-300">{type.name}</p>
				{/if}
				{#if type.name === 'fire'}
					<p class="badge text-sm text-center text-red-300">{type.name}</p>
				{/if}
				{#if type.name === 'water'}
					<p class="badge text-sm text-center text-blue-300">{type.name}</p>
				{/if}
				{#if type.name === 'grass'}
					<p class="badge text-sm text-center text-green-300">{type.name}</p>
				{/if}
				{#if type.name === 'poison'}
					<p class="badge text-sm text-center text-fuchsia-400">{type.name}</p>
				{/if}
				{#if type.name === 'ice'}
					<p class="badge text-sm text-center text-cyan-300">{type.name}</p>
				{/if}
				{#if type.name === 'ghost'}
					<p class="badge text-sm text-center text-violet-300">{type.name}</p>
				{/if}
				{#if type.name === 'electric'}
					<p class="badge text-sm text-center text-yellow-300">{type.name}</p>
				{/if}
				{#if type.name === 'ground'}
					<p class="badge text-sm text-center text-yellow-600">{type.name}</p>
				{/if}
				{#if type.name === 'rock'}
					<p class="badge text-sm text-center text-yellow-500">{type.name}</p>
				{/if}
				{#if type.name === 'flying'}
					<p class="badge text-sm text-center text-sky-300">{type.name}</p>
				{/if}
				{#if type.name === 'steel'}
					<p class="badge text-sm text-center text-gray-500">{type.name}</p>
				{/if}
				{#if type.name === 'dark'}
					<p class="badge text-sm text-center text-gray-600">{type.name}</p>
				{/if}
				{#if type.name === 'bug'}
					<p class="badge text-sm text-center text-green-500">{type.name}</p>
				{/if}
				{#if type.name === 'fighting'}
					<p class="badge text-sm text-center text-red-700">{type.name}</p>
				{/if}
				{#if type.name === 'psychic'}
					<p class="badge text-sm text-center text-pink-400">{type.name}</p>
				{/if}
				{#if type.name === 'fairy'}
					<p class="badge text-sm text-center text-pink-200">{type.name}</p>
				{/if}
				{#if type.name === 'dragon'}
					<p class="badge text-sm text-center text-blue-500">{type.name}</p>
				{/if}
			{/each}
		</div>
		<div class="flex flex-row space-x-2">
			<img class="p-1" alt={data.name} src={data.sprites.front_default} />
			<img class="p-1" alt={data.name} src={data.sprites.back_default} />
			<img class="p-1" alt={data.name} src={data.sprites.front_shiny} />
			<img class="p-1" alt={data.name} src={data.sprites.back_shiny} />
		</div>
		<div class="p-2">
			<p class="font-light text-sm">Weight: {data.weight}</p>
			<p class="font-light text-sm">Height: {data.height}</p>
			<p class="font-light text-sm">Base Experience: {data.base_experience}</p>
		</div>
	</div>
</section>

<style>
	section > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
