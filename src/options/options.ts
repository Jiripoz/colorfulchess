import Filters from "src/components/Filters.svelte";
import { highlightConfig } from "src/stores/storage";

const target = document.getElementById("app");
function render() {
  highlightConfig.get().then((config) => {
    new Filters({ target, props: { highlight: config } });
  });
}

window.addEventListener("DOMContentLoaded", render);
