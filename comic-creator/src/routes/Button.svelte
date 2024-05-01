<!-- Button.svelte -->
<script lang="ts">
  let buttonProps = {};

  export let classList: any[] = [];
  let classes = "";

  // Join the classes into a space-separated string
  $: classes = classList.join(" ");

  // Default props for the button
  let defaultProps = {
    on: {},
  };

  // Merge user-defined props with default props
  buttonProps = { ...defaultProps, ...$$restProps };
</script>

<button
  class={classes}
  on:click
  on:mouseover
  on:mouseenter
  on:focus
  on:mouseleave
  {...buttonProps}
>
  <slot />
</button>

<style>
  button {
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition:
      background-color 0.3s,
      color 0.3s;
    border: none;
    outline: none;
  }

  .primary {
    color: white;
    background-color: green;
  }

  .danger {
    color: white;
    background-color: red;
  }

  .sm {
    font-size: 1em;
    padding: 0.5em 1em; /* Adjust padding for small size */
  }

  .lg {
    font-size: 2em;
    padding: 15px 30px; /* Adjust padding for large size */
  }
</style>
