<script>
	export let data;

<<<<<<< Updated upstream

	export let data

    const {title, description, imageUrl, pageUrl, color} = data;
</script>

<svelte:head>
	    <meta http-equiv="refresh" content="1;url={pageUrl}">
	<!-- General Meta Tags -->
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if imageUrl}
	<meta property="og:image" content={imageUrl} />

		{/if}
	<meta property="og:type" content="website" />
	<meta property="og:url" content={pageUrl} />

	<!-- Twitter Cards -->

	<meta name="twitter:site" content="@JaFu_py">
	<meta name="twitter:creator" content="@JaFu_py">
	<meta name="twitter:title" content="{title}">
	<meta name="twitter:description" content="{description}">
	{#if imageUrl}
	<meta name="twitter:image" content="{imageUrl}">
	<meta name="twitter:card" content="summary_large_image">
		{:else }
		<meta name="twitter:card" content="summary">
		{/if}
	<!-- Theme Color -->
	<meta name="theme-color" content={color} />
</svelte:head>
=======
	const { title, description, imageUrl, PageUrl, color } = data;
</script>

<svelte:head>
	{#if data !== '404'}
		<meta http-equiv="refresh" content="1;url={PageUrl}" />

		<!-- General Meta Tags -->
		<meta name="title" content={title} />
		<meta name="description" content={description} />

		<!-- Open Graph -->
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		{#if imageUrl}
			<meta property="og:image" content={imageUrl} />
		{/if}
		<meta property="og:type" content="website" />
		<meta property="og:url" content={PageUrl} />

		<!-- Twitter Cards -->

		<meta name="twitter:site" content="@JaFu_py" />
		<meta name="twitter:creator" content="@JaFu_py" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		{#if imageUrl}
			<meta name="twitter:image" content={imageUrl} />
			<meta name="twitter:card" content="summary_large_image" />
		{:else}
			<meta name="twitter:card" content="summary" />
		{/if}
		<!-- Theme Color -->
		<meta name="theme-color" content={color} />
	{/if}
</svelte:head>
{#if data === '404'}
	<h1>404</h1>
	<p>This isn't a valid link, silly!</p>
{/if}
>>>>>>> Stashed changes
