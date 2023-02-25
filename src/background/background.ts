import { highlightConfig } from "../stores/storage";
import { bridge } from "src/stores/di";

chrome.runtime.onInstalled.addListener(() => {
  highlightConfig.get().then(console.log);
});

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  sendResponse({ received: true });
});
