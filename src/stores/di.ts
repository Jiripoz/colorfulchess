import type { ChessPiecesBridge } from "src/bridges/bridge";
import { ChessComBridge } from "src/bridges/chesscom.bridge";

export let bridge: ChessPiecesBridge;

export const setupDependencies = async () => {
  const website = document.location.origin;
  if (website.includes("chess.com")) {
    bridge = new ChessComBridge();
  } else if (website.includes("lichess.org")) {
    bridge = new ChessComBridge();
  } else {
  }
  bridge.updateChessPieces();

  const targetNode = document.getElementsByTagName(bridge.tagName)[0];
  const config = { attributes: true, childList: true, subtree: true };

  let observer: MutationObserver;

  const callback = async (mutationList) => {
    console.log("entrei no callback");
    observer.disconnect();
    bridge.updateChessPieces();

    await bridge.updateHighlights();

    observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  };

  observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
};
