<script>
	import '../app.scss';
    import { IconHome as Home,  } from "@tabler/icons-svelte"

    import { page } from "$app/stores";

</script>



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
	footer {
		height: 10vh;
		background: #00000080;

		border-top-left-radius: $sz-md;
		border-top-right-radius: $sz-md;

		padding: $sz-md;
	}
</style>
