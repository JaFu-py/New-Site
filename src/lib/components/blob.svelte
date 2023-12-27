<script>
	import { onMount } from 'svelte';

	let blob;

	onMount(() => {
		window.onpointermove = (event) => {
			const { clientX, clientY } = event;

			blob.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`
				},
				{ duration: 3000, fill: 'forwards' }
			);
		};
	});
</script>

<div bind:this={blob} id="blob" />
<div id="blur" />

<style lang="scss">
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		50% {
			transform: scale(1, 1.5);
		}

		to {
			transform: rotate(360deg);
		}
	}

	#blob {
		background-color: white;
		height: 15vmax;
		aspect-ratio: 1;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background: linear-gradient(to right, $bra-pri, $bra-sec);
		animation: rotate 20s infinite;
		opacity: 0.8;
		z-index: -1;
	}

	#blur {
		height: 100%;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: -1;
		backdrop-filter: blur(12vmax);
	}
</style>
