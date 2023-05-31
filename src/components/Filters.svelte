<script lang="ts">
  import { updateHighlightConfig } from "src/stores/storage";
  import type { HighlightConfig, UpdateDisplayFirstKey, UpdateDisplaySecondKey } from "src/types/types";

  export let highlight: HighlightConfig;

  const updateDisplay: (firstKey: UpdateDisplayFirstKey, secondKey: UpdateDisplaySecondKey) => Promise<void> = async (firstKey, secondKey) => {
    await updateHighlightConfig(firstKey, secondKey);
    console.log("updatehighligh ok");
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, { greeting: "hello" })
  }

</script>

<div class="container">
  <div class="white-pieces">
    <div>
      <div>White King</div>
      <input type="checkbox" checked={highlight.White.King} on:click={() => updateDisplay("White", "King")} />
    </div>
    <div>
      <div>White Queen</div>
      <input type="checkbox" checked={highlight.White.Queen} on:click={() => updateDisplay("White", "Queen")} />
    </div>
    <div>
      <div>White Rooks</div>
      <input type="checkbox" checked={highlight.White.Rooks} on:click={() => updateDisplay("White", "Rooks")} />
    </div>
    <div>
      <div>White Bishops</div>
      <input type="checkbox" checked={highlight.White.Bishops} on:click={() => updateDisplay("White", "Bishops")} />
    </div>
    <div>
      <div>White Knights</div>
      <input type="checkbox" checked={highlight.White.Knights} on:click={() => updateDisplay("White", "Knights")} />
    </div>
    <div>
      <div>White Pawns</div>
      <input type="checkbox" checked={highlight.White.Pawns} on:click={() => updateDisplay("White", "Pawns")} />
    </div>
  </div>
  <div class="black-pieces">
    <div>
      <div>Black King</div>
      <input type="checkbox" checked={highlight.Black.King} on:click={() => updateDisplay("Black", "King")} />
    </div>
    <div>
      <div>Black Queen</div>
      <input type="checkbox" checked={highlight.Black.Queen} on:click={() => updateDisplay("Black", "Queen")} />
    </div>
    <div>
      <div>Black Rooks</div>
      <input type="checkbox" checked={highlight.Black.Rooks} on:click={() => updateDisplay("Black", "Rooks")} />
    </div>
    <div>
      <div>Black Bishops</div>
      <input type="checkbox" checked={highlight.Black.Bishops} on:click={() => updateDisplay("Black", "Bishops")} />
    </div>
    <div>
      <div>Black Knights</div>
      <input type="checkbox" checked={highlight.Black.Knights} on:click={() => updateDisplay("Black", "Knights")} />
    </div>
    <div>
      <div>Black Pawns</div>
      <input type="checkbox" checked={highlight.Black.Pawns} on:click={() => updateDisplay("Black", "Pawns")} />
    </div>
  </div>
  <div class="arrows">
    <div>
      <div>Hanging Black</div>
      <input type="checkbox" checked={highlight.Hanging.HBlack} on:click={() => updateDisplay("Hanging", "HBlack")} />
    </div>
    <div>
      <div>Hanging White</div>
      <input type="checkbox" checked={highlight.Hanging.HWhite} on:click={() => updateDisplay("Hanging", "HWhite")} />
    </div>
    <div>
      <div>Arrow teste</div>
      <input type="checkbox" checked={highlight.Arrow.State} on:click={() => updateDisplay("Arrow", "State")} />
    </div>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
  }
</style>
