import type { ChessPiecesBridge } from "src/bridges/bridge";
import { ChessComBridge } from "src/bridges/chesscom.bridge";

export let bridge: ChessPiecesBridge;

let boardObserver: MutationObserver;
let headerObserver: MutationObserver;
let mutationChangeCount = 0;

const disconnectObserver = (observer, observerName) => {
  if (observer) {
    console.log(`[disconnectObserver] DISCONNECTING: ${observerName}`);
    observer?.disconnect();
  }
};

const updateBoardObserver = (callback, targetNode) => {
  console.log("[updateBoardObserver] starting");
  const config = { attributes: true, childList: true, subtree: true };
  disconnectObserver(boardObserver, "boardObserver");
  boardObserver = undefined;
  boardObserver = new MutationObserver(callback);
  boardObserver.observe(targetNode, config);
};

const setupObservers = () => {
  console.log("[setupObserver] starting");
  disconnectObserver(boardObserver, "boardObserver");
  disconnectObserver(headerObserver, "headerObserver");

  const website = document.location.origin;
  if (website.includes("chess.com")) {
    bridge = new ChessComBridge();
  } else if (website.includes("lichess.org")) {
    bridge = new ChessComBridge();
  } else {
    return;
  }

  headerObserver = new MutationObserver(() => {
    console.log("[headerObserver] starting");
    disconnectObserver(boardObserver, "boardObserver");

    const targetNode = document.getElementsByTagName(bridge.tagName)[0];
    if (targetNode) {
      bridge.updateChessPieces();

      const boardCallBack = async (_) => {
        console.log("[boardCallBack] starting");
        mutationChangeCount += 1;
        disconnectObserver(boardObserver, "boardObserver");
        bridge.updateChessPieces();

        await bridge.updateHighlights();
        updateBoardObserver(boardCallBack, targetNode);

        console.log(`Mutation Change Count: ${mutationChangeCount}`);
      };
      updateBoardObserver(boardCallBack, targetNode);
    }
  });

  headerObserver.observe(document.head, { attributes: true, childList: true, subtree: true });
};

export const setupDependencies = async () => {
  window.addEventListener("locationchange", function () {
    setupObservers();
  });
  setupObservers();
};
