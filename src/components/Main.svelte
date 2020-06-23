<style>
  .Main-container {
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
  }
  .Main-content {
    margin: 2em 0 0 0;
    display: grid;
    grid-auto-columns: 3fr 1fr;
    grid-gap: 60px;
    justify-content: space-between;
  }
</style>

<main class="Main">
  <div class="Main-container">
    <div class="Main-content">
      <slot />
      <div class="Sidebar">Sidebar</div>
    </div>
  </div>
</main>
