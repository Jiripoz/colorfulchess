import type { ChessPiecesBridge } from "./bridge";
import type { HighlightConfig } from "src/chess/types";

export class LichessBridge implements ChessPiecesBridge {
  updateChessPieces() {
    throw new Error("Method not implemented.");
  }
  updateHighlights(highlightConfig: HighlightConfig) {
    throw new Error("Method not implemented.");
  }
}
