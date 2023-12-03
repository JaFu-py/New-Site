<script>
	import '../app.scss';
	import {Home,  Link} from "svelte-hero-icons"
	import Blob from '$lib/components/blob.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.route.id !== '/r/[slug]'}
	<nav>
		<a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>
		</a>
		<a href="/r/"><svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
		</svg>
		</a>
	</nav>
	<slot />
	<Blob />
	<footer>&copy 2023 JaFu.py All rights reserved.</footer>
{:else}
	<slot />
{/if}

<style lang="scss">
	// ----- Nav -----

	nav {
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(11.7px);
		-webkit-backdrop-filter: blur(11.7px);
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		position: fixed;
		top: 2em;
		right: 2em;
		display: flex;
		flex-direction: column;
		width: fit-content;
		padding: 5px;

		z-index: 5000;

<<<<<<< Updated upstream
{#if $page.route.id !== "/r/[slug]"}
<nav>
    <a href="#"><Home/></a>
</nav>
    <slot />
<footer>&copy 2023 JaFu.py All rights reserved.</footer>
    {:else}
    <slot />
    {/if}
<style lang="scss">
  // ----- Nav -----

  nav {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.7px);
    -webkit-backdrop-filter: blur(11.7px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    position: fixed;
    top: 2em;
    right: 2em;
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 5px;

    z-index: 5000;

    a {
      text-decoration: none;
      padding: 10px;
      color: $co-neu-100;
      border-radius: 1rem;
      margin: $sz-xs2;

      &:hover {
        color: #45adda;
      }
    }
  }
=======
		a {
			text-decoration: none;
			padding: 10px;
			color: $neu-100;
			border-radius: 1rem;
			margin: $xs2;

			&:hover {
				color: #45adda;
			}
		}
	}
>>>>>>> Stashed changes
	footer {
		height: 10vh;
		background: #00000080;

		border-top-left-radius: $md;
		border-top-right-radius: $md;

		padding: $md;
	}
</style>
