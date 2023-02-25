import { bridge, setupDependencies } from "src/stores/di";

setupDependencies();
window.addEventListener("popstate", setupDependencies);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  bridge.updateHighlights();
  bridge.updateChessPieces();
  if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
});
