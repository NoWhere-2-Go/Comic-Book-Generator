<script lang="ts">
  import { MultiSelect } from "svelte-multiselect";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import "../app.css";
  import Button from "./Button.svelte";
  import { createComicStory, createImagePrompt } from "../api";
  import Modal from "./Modal.svelte";

  export let data: any;
  let showModal = false;
  let spiderOptions = data.spiders;
  let villainOptions = data.villains;
  let npcOptions = data.NPCs;

  let selectedSpiderMen: any = [];
  let selectedVillains: any = [];
  let selectedNPCs: any = [];
  let response: any = " ";
  let imagePrompt: any = " ";

  const handleSubmit = async () => {
    selectedSpiderMen = selectedSpiderMen.map((option: any) => option);
    selectedVillains = selectedVillains.map((option: any) => option);
    selectedNPCs = selectedNPCs.map((option: any) => option);

    console.log("Selected SpiderMen:", selectedSpiderMen);
    console.log("Selected Villains:", selectedVillains);
    console.log("Selected Loved Ones:", selectedNPCs);

    response = await createComicStory(
      selectedSpiderMen,
      selectedVillains,
      selectedNPCs
    );

    imagePrompt = await createImagePrompt(
      selectedSpiderMen,
      selectedVillains,
      selectedNPCs
    );
    // response =
    //   selectedSpiderMen.join(" ") +
    //   " " +
    //   selectedVillains.join(" ") +
    //   " " +
    //   selectedNPCs.join(" ");
    console.log("response: " + response);
    console.log("image prompt response: " + imagePrompt);
    showModal = true;
  };
</script>

<div class="panel-body">
  <LayoutGrid>
    <Cell>
      <div class="layoutCell">
        <MultiSelect
          placeholder="SpiderMen"
          bind:selected={selectedSpiderMen}
          options={spiderOptions}
          --sms-options-bg="#333"
        />
      </div>
    </Cell>
    <Cell>
      <div class="layoutCell">
        <MultiSelect
          placeholder="Villains"
          bind:selected={selectedVillains}
          options={villainOptions}
          --sms-options-bg="#333"
        />
      </div>
    </Cell>
    <Cell>
      <div class="layoutCell">
        <MultiSelect
          placeholder="Loved Ones"
          options={npcOptions}
          bind:selected={selectedNPCs}
          --sms-options-bg="#333"
        />
      </div>
    </Cell>
  </LayoutGrid>
  <div id="buttonContainer">
    <Button classList={["primary", "sm"]} on:click={handleSubmit}>
      Submit
    </Button>
  </div>
  <slot />
</div>

<Modal bind:showModal bind:imagePrompt>
  <h4 slot="header"><b>Here is your generated comic story!</b></h4>
  <body>{response}</body>
</Modal>

<style>
  .layoutCell {
    height: 60px;
    display: flex;
    align-items: center;
    color: var(--mdc-theme-on-secondary, #fff);
    background-color: var(--mdc-theme-on-secondary, #fff);
  }
  .panel-body {
    padding: 1.6rem;
  }
  #buttonContainer {
    margin-left: 45%;
  }
</style>
