<main>
	<section class="hero">
		<div class="items">
			<p>Hi, I'm</p>
			<h1>Jacob</h1>
			<p>A random guy on the interwebs</p>
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
				font-size: $sz-xl6;
				font-weight: $wt-bold;
			}
			p {
				font-size: $sz-lg;
			}
		}
	}
</style>
