import type { HighlightConfig } from "../chess/types";

export interface ChessPiecesBridge {
  updateChessPieces();
  updateHighlights(highlightConfig: HighlightConfig);
}
