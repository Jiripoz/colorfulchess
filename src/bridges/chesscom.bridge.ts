import { PiecesManager } from "src/chess/colorpieces";
import type { ChessPiecesBridge } from "./bridge";
import type {
  ChessPiece,
  ChessColor,
  ChessPieceType,
  Position,
  HighlightConfig,
} from "src/chess/types";

const ChessTypeMap: Record<ChessPieceType, string> = {
  Pawn: "p",
  Knight: "n",
  Bishop: "b",
  Rooks: "r",
  Queen: "q",
  King: "k",
};
const ChessColorMap: Record<ChessColor, string> = {
  Black: "b",
  White: "w",
};

export class ChessComBridge implements ChessPiecesBridge {
  private piecesManager?: PiecesManager;
  getPositionFromString(str: string): Position {
    const X = parseInt(str.match(/square\-(\d)\d/)[0]);
    const Y = parseInt(str.match(/square\-\d(\d)/)[0]);
    return { X, Y };
  }

  parsePieceInfo(
    cssClass: string,
    type: ChessPieceType,
    color: ChessColor
  ): ChessPiece {
    const position = this.getPositionFromString(cssClass);
    return {
      ...position,
      type,
      color,
    };
  }

  parsePiecesInfo(type: ChessPieceType, color: ChessColor): ChessPiece[] {
    const shortType = ChessTypeMap[type];
    const shortColor = ChessColorMap[color];
    const elements = document.getElementsByClassName(
      `piece ${shortColor}${shortType}`
    );
    const pieces: ChessPiece[] = [];
    for (const element of elements) {
      const piece = this.parsePieceInfo(element.className, type, color);
      pieces.push(piece);
    }
    return pieces;
  }

  updateChessPieces() {
    const pieces = Object.keys(ChessTypeMap);
    const whitePieces = pieces
      .map((p) => this.parsePiecesInfo(<ChessPieceType>p, "White"))
      .reduce((a, b) => a.concat(b));

    const blackPieces = pieces
      .map((p) => this.parsePiecesInfo(<ChessPieceType>p, "Black"))
      .reduce((a, b) => a.concat(b));
    this.piecesManager = new PiecesManager(whitePieces, blackPieces);
  }

  updateHighlights(highlightConfig: HighlightConfig) {
    this.piecesManager.calculateInfluence(highlightConfig);
    throw new Error("Method not implemented.");
  }
}
