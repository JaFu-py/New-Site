<script>
	import '../app.scss';
    import { IconHome as Home,  } from "@tabler/icons-svelte"

    import { page } from "$app/stores";
	import { onMount } from 'svelte';

  let JaFuTime;
  let ipAddress = null;

  export let data;

  onMount(async () => {
    const timeZone = 'Europe/London'; // Replace with the desired time zone

    const JaFuTimeChange = () => {
      JaFuTime = new Date().toLocaleTimeString([], { 
		timeZone,
		hour: '2-digit',
        minute: '2-digit', });
    };

    const interval = setInterval(JaFuTimeChange, 30000);

    // Initial update
    JaFuTimeChange();


	

    return () => clearInterval(interval);
  });

</script>



{#if $page.route.id !== "/r/[slug]"}





<nav>
    <a href="https://www.jafu.dev/"><Home/></a>
</nav>
    <slot />
<footer>
	<img src="https://avatars.githubusercontent.com/u/104758482?v=4" alt="JaFu Logo J">
	<p id="version">v1.3.1</p>
	<p>My local time: {JaFuTime}</p>
	 <p>By the way, your IP Address is {data.ipAddress?.replaceAll("\"", "")}</p>
	 <p>PLACEHOLDER</p><p>PLACEHOLDER</p><p>PLACEHOLDER</p><p>PLACEHOLDER</p><p>PLACEHOLDER</p><p>PLACEHOLDER</p><p>PLACEHOLDER</p>
	<p id="copyright">&copy 2023 JaFu.py All rights reserved.</p>
</footer>
<div class="s"></div>




{:else}
    <slot />
    {/if}
<style lang="scss">
	// ----- Nav -----
	img {
		aspect-ratio: 1/1;
		grid-row: span 3;
		width: 10rem;
		border-radius: 50%;
	}
	nav {
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(11.7px);
		-webkit-backdrop-filter: blur(11.7px);
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		position: fixed;
		top: 2rem;
		right: 2rem;
		display: flex;
		flex-direction: column;
		width: fit-content;
		padding: 5px;

		z-index: 5000;

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
	footer {

		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		margin:2rem;
		margin-bottom: 0;

		
		
		border-top-left-radius: $md;
		border-top-right-radius: $md;

		padding: $md * 1.5;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	#copyright {
		grid-row: 4;
		grid-column-start: 2;
		grid-column-end: 5;

		text-align: center;
	}
	#version {
		grid-row: 4;
		grid-column: 1;

		
		padding: 0.5rem 1rem;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		width: fit-content;
	}
	.s {
		height:2rem;
		margin-top: 0;
	}
</style>
