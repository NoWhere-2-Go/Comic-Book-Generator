<script>
  import Panel from "./Panel.svelte";
  import PanelHeader from "./PanelHeader.svelte";
  import PanelBody from "./PanelBody.svelte";
  export let data;
</script>

<div class="containerMain">
  <Panel>
    <PanelHeader title="Create a Spiderman Comic" />
    <PanelBody {data}></PanelBody>
  </Panel>
</div>

<style>
  .containerMain {
    height: 100%;
    width: 70%;
    margin: auto;
  }
</style>
