import type { ChessPiecesBridge } from "src/bridges/bridge";
import Popup from "src/components/Popup.svelte";
import { highlightConfig, settingsStorage } from "src/stores/storage";

const target = document.getElementById("app");

async function render() {
  const settings = await settingsStorage.get();
  highlightConfig.get().then(config => {
    new Popup({ target, props: { highlight: config, settings } });
  });
}


window.addEventListener("DOMContentLoaded", render);
