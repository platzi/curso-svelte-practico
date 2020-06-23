<script>
  import Nav from "../components/Nav.svelte";
  import Main from "../components/Main.svelte";

  export let segment;
</script>

<Nav {segment} />
<Main>
  <slot />
</Main>
