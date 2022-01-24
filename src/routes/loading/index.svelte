<script context="module">
  export async function load({ fetch }) {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          posts: await res.json(),
        },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not fetch the posts`),
    };
  }
</script>

<script>
  import Title from "$lib/header-title.svelte";
  export let posts;
</script>

<svelte:head>
  <title>Loading</title>
</svelte:head>

<Title
  title="Loading"
  intro="A load function runs both during server-side rendering and in the client, and allows you to get data for a page without (for example) showing a loading spinner and fetching data in onMount."
/>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="max-w-md flex  ">
  <ul class="divide-y divide-gray-200">
    {#each posts as post}
      <li class="py-4">
        <div class="flex space-x-3">
          <img
            class="h-6 w-6 rounded-full"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
            alt=""
          />
          <div class="flex-1 space-y-1">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium"><a href={`/loading/${post.id}`}>{post.title}</a></h3>
              <p class="text-sm text-gray-500">{post.id}</p>
            </div>
            <p class="text-sm text-gray-500">{post.body}</p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
