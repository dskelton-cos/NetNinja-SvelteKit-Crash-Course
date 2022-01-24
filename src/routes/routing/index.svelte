

<script>
  import Title from "$lib/header-title.svelte";
</script>

<svelte:head>
  <title>Routing</title>
</svelte:head>

<Title title="Routing" intro="Filesystem-based router"/>

<p>Two types of routes — pages and endpoints.</p>

<p>pages are rendered on both the client and server</p>

<p>Endpoints run only on the server</p>
<p>Pages can request data from endpoints. Endpoints return JSON by default, though may also return data in other formats.</p>

<p>Dynamic parameters are encoded using [brackets]. src/routes/blog/[slug].svelte</p>
<p>multiple dynamic parts, like [id]-[category].svelte</p>