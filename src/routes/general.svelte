<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Post from "../components/Post.svelte";
  export let posts;
  const filterPost = posts.filter(post => post.tag === "general");
</script>

<style>
  .Posts {
    display: grid;
    justify-content: space-between;
    grid-gap: 30px;
    grid-template-columns: 1fr;
  }
</style>

<svelte:head>
  <title>General</title>
</svelte:head>

<div class="General">
  <h1>General</h1>
  <div class="Posts">
    {#if filterPost.length >= 1}
      {#each filterPost as post}
        <Post {post} />
      {/each}
    {:else}
      <p>Sin resultados...</p>
    {/if}
  </div>
</div>
