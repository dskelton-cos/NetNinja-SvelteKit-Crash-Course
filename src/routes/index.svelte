<script>
  let title = "Ninja gaming";

  const updateTitle = () => {
    title = "New Ninja gaming";
  };
</script>

<div class="index">
  <h1>{title}</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <button on:click={updateTitle}> Update</button>
  <input type="text" bind:value={title} >
</div>

<style>
    .index {
        margin: 3rem auto;
        display: block;
        color: brown;
    }
</style>
