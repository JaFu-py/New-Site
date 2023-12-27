<script>
    export let data
    const {title, description, imageUrl, PageUrl, color} = data.data;
</script>

<section>
{#each data.data as item}
    {#if item.Hidden === false}
    <article>
        <div class="content">
            <h2>{item.title}</h2>
        </div>
    </article>
        {/if}
    {/each}
</section>

<style lang="scss">
    section {
        display: grid;
        gap: 1em;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        position: relative;
        width: calc(100% - 2em);
        z-index: 2;
    }

    article {box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(11.7px);
      -webkit-backdrop-filter: blur(11.7px);
      border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: $md;
        cursor: pointer;
        height: 240px;
      aspect-ratio: 6/4;
        position: relative;
    }

    article:hover:before {
        opacity: 1;
    }

    article:before {
        background: linear-gradient(
                45deg,
                transparent 5%,
                rgb(255, 215, 137) 50%,
                transparent 99%
        );
        border-radius: inherit;
        content: "";
        inset: 0px;
        opacity: 0;
        position: absolute;
        transition: opacity 400ms;
        z-index: 0;
    }

    .content {
      background-color: #000000;
      background-blend-mode: overlay;
        border-radius: inherit;
        display: grid;
        inset: 1px;
        padding: 1em;
        position: absolute;
    }

</style>