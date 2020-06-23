<script>
  import Nav from "../components/Nav.svelte";
  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;
</script>

<Header />
<Nav {segment} />
<Main>
  <slot />
</Main>
<Footer />
