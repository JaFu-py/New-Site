<script>
	import { onMount } from 'svelte';
	import Typewriter from '$lib/components/type.svelte';
	const texts = [
		'A random guy from the interwebs', 
		'Binary Alchemist',
		'@JaFu.py || @JaFupy on social'
		];
</script>

<main>
	<section class="hero">
		<div class="items">
			<p>Hi, I'm</p>
			<h1>Jacob</h1>
			<p><Typewriter {texts} /></p>
		</div>
	</section>
	<section>
		<div class="items">
			<h2>Who am I?</h2>
		</div>
	</section>
</main>

<style lang="scss">
	// Hero
	section.hero {
		//
		height: 100vh;

		display: grid;
		place-items: center;

		.items {
			h1 {
				margin: 0;
				font-size: $xl6;
				font-weight: $bold;
			}
			p {
				font-size: $lg;
			}
		}
	}
</style>
