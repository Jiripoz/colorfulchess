<script lang="ts">
	import PiecesConfig from './PiecesConfig.svelte';
  import type { HighlightConfig } from "src/types/types";

    export let highlightStore: HighlightConfig; 
</script>

<div class=highlight-container>
    <div class="white-container"><PiecesConfig pieces={highlightStore.White} color="White"/></div>
    <div class="black-container"><PiecesConfig pieces={highlightStore.Black} color="Black"/></div>
</div>

<style>
  .highlight-container {
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    height: 100%;
    align-items: end;
    background-color: #272522;
    justify-content: space-between;
    margin-left: 5px; 
    border-radius: 5px 0px 5px 5px;
    margin-bottom: 5px;
  }

  .white-container {
    display: flex;
    margin-top: 8px;
    margin-right: 5px;
  }

  .black-container {
    display: flex;
    margin-top: 8px;
    margin-right: 5px;
    margin-bottom: 8px;
  }



</style>