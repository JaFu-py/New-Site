<script>
    import { page } from '$app/stores';
    import supabase from "$lib/subabase.js";

    supabase.from("")

    let title = "Your Site Title";
    let description = "Brief description of your site or the specific page content.";
    let imageUrl = "https://yourwebsite.com/image.jpg"; // Optional
    let pageUrl = "https://yourwebsite.com/page-url";
    let colorCode = "#HEX_COLOR_CODE";
</script>

<svelte:head>
    <meta http-equiv="refresh" content="1;url={pageUrl}">
    <!-- General Meta Tags -->
    <meta name="title" content={title}>
    <meta name="description" content={description}>


    <!-- Open Graph -->
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content={imageUrl}>
    <meta property="og:type" content="website">
    <meta property="og:url" content={pageUrl}>

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content={title}>
    <meta name="twitter:description" content={description}>
    <meta name="twitter:image" content={imageUrl}>

    <!-- Theme Color -->
    <meta name="theme-color" content={colorCode}>
</svelte:head>

