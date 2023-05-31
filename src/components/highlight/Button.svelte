<script lang="ts">
  import { updateHighlightConfig } from "src/stores/storage";
  import type { UpdateDisplayFirstKey, UpdateDisplaySecondKey } from "src/types/types";
  import { writable } from "svelte/store";

  export let color: UpdateDisplayFirstKey;
  export let piece: UpdateDisplaySecondKey;
  export let state: boolean;
  const buttonState = writable(state);

  const updateDisplay: (firstKey: UpdateDisplayFirstKey, secondKey: UpdateDisplaySecondKey) => Promise<void> = async (firstKey, secondKey) => {
    await updateHighlightConfig(firstKey, secondKey);
    console.log("updatehighligh ok");
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, { greeting: "hello" });

    await buttonState.update(value => !value);
};

</script>

<button 
    class:selected={$buttonState}
    on:click="{() => updateDisplay(color, piece)}"
    > <img src={`/images/${color}${piece}.png`} alt={`${color}${piece}`} />
</button>

<style>
    img {
        display:flex;
        width: 24px;
        height: 24px;
        left: 5px;
        top: 5px;
        margin: 0px;
        padding: 0px;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        left: 85px;
        top: 133px;
        margin: 0px;
        padding: 0px;
        border: 0px;
        background: #FFFFFF;

        box-shadow: -2px 2px 0px var(--button-shade);
        border-radius: 5px;
    }
    .selected {
        width: 34px;
        height: 34px;
        margin-left: -2px;
        margin-bottom: -2px;

        background: var(--button-shade);
        border-radius: 5px;
        box-shadow: 0px;
    }  
</style>