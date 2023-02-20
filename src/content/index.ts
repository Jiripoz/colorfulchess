import { ChessComBridge } from "src/bridges/chesscom.bridge";
import { LichessBridge } from "src/bridges/lichess.bridge";
import type { ChessPiecesBridge } from "src/bridges/bridge";

import Overlay from "../components/Overlay.svelte";
import { storage } from "../storage";

// Some global styles on the page
import "./styles.css";

// Some JS on the page
storage.get().then(console.log);

// Some svelte component on the page
new Overlay({ target: document.body });

let bridge: ChessPiecesBridge;

const website = document.location.origin;

if (website.includes("chess.com")) {
  bridge = new ChessComBridge();
} else if (website.includes("lichess.org")) {
  bridge = new LichessBridge();
}
