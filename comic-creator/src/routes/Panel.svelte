<script>
  export let minimal = false;
</script>

<div class="container">
  <div class="panel {minimal ? 'panel-minimal' : ''}">
    <slot />
  </div>
</div>

<style>
  .container {
    position: relative;
    display: flex;
    overflow: scroll;
    height: 98vh;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
  .panel {
    width: 100%;
    height: 100%;
    background-color: var(--mdc-theme-on-secondary, #fff);
    border-radius: 0.8rem;
  }
  .panel-minimal {
    border: 1px solid #eee;
    background: #f0f0f0;
    background: #fff;
  }
</style>
