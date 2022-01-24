<script context="module">
  export async function load({ fetch, params }) {
    const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          post: await res.json(),
        },
      };
    }

    return {
      // status: res.status,
      // error: new Error(`Could not fetch the post`),
      status: 301,
      redirect: '/loading'
    };
  }
</script>

<script>
 import Title from "$lib/header-title.svelte";
export let post;
</script>


<Title
subTitle="Dynamic routes"
  title={post.title}
  intro={post.body}
/>
