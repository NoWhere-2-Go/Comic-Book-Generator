<script>
  export let title = "";
  export let minimal = false;
</script>

<div class="panel-header {minimal ? 'panel-header-minimal' : ''}">
  <slot name="panel-header">
    <h3>{title}</h3>
  </slot>
</div>

<style>
  .panel-header {
    border-bottom: 1px solid #ddd;
    padding: 0.8rem 1.6rem;
    background-color: var(--mdc-theme-secondary, #333);
    color: var(--mdc-theme-on-secondary, #fff);
    text-align: center;
  }

  :global(.panel-minimal .panel-header) {
    border-bottom: 1px solid #eee;
  }

  h3 {
    margin: 0.8rem 0;
  }
</style>
