<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import readingTime from "../../utils/readingTime";
  import formatIsoTime from "../../utils/formatIsoTime";
  export let post;
</script>

<style>
  h2 {
    color: #22215b;
    font-size: 28px;
    margin: 0;
    padding: 0;
  }
  .Post-title p {
    color: #555;
    font-size: 14px;
    font-weight: 300;
    margin-top: 5px;
    padding: 0;
  }
  .comments {
    margin: 2em 0 0 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="Post">
  <div class="Post-title">
    <h2>{post.title}</h2>
  </div>
  <p class="date">
    <time datatime={post.createdAt}>📅 {formatIsoTime(post.createdAt)}</time>
    <span>{readingTime(post.html)}</span>
  </p>
  <div class="content">
    {@html post.html}
  </div>
  <div class="comments" />
</div>
