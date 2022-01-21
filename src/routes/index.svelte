<script>
  let title = "Ninja gaming";

  const updateTitle = () => {
    title = "New Ninja gaming";
  };
</script>

<div class="block">
  <h1>{title}</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <button on:click={updateTitle}> Update</button>
  <input type="text" bind:value={title}  class=""/>

<a href="/guides">Guides</a>
<a href="/">Home</a>
</div>


