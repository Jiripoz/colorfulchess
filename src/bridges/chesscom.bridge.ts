import { PiecesManager } from "src/chess/colorpieces";
import type { ChessPiecesBridge } from "./bridge";
import type { ChessPiece, ChessColor, ChessPieceType, Position } from "src/types/types";
import { highlightConfig } from "src/stores/storage";

const ChessTypeMap: Record<ChessPieceType, string> = {
  Pawns: "p",
  Knights: "n",
  Bishops: "b",
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
  public tagName = "chess-board";
  getPositionFromString(str: string): Position {
    const X = parseInt(str.match(/\d\d/)[0].slice(0, -1));
    const Y = parseInt(str.match(/\d\d/)[0].slice(1));
    return { X, Y };
  }

  parsePieceInfo(cssClass: string, type: ChessPieceType, color: ChessColor): ChessPiece {
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
    const elements = document.getElementsByClassName(`piece ${shortColor}${shortType}`);
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

  updateHighlights = async () => {
    const highlight = await highlightConfig.get();
    this.clearBoard();
    const squaresToColor = this.piecesManager.calculateInfluence(highlight);
    const hangingPieces = this.piecesManager.calculateHanging(highlight);
    // Record<ChessColor, [number, number][]>

    this.colorSquares(squaresToColor.White, "rgb(235, 97, 80)");
    this.colorSquares(squaresToColor.Black, "rgb(20, 158, 175)");

    this.colorSquares(hangingPieces.HWhite, "rgb(8, 131, 5)");
    this.colorSquares(hangingPieces.HBlack, "rgb(222, 252, 23)");
    
  };

  clearBoard() {
    const boardChildren = document.getElementsByTagName("chess-board")[0].children;
    const childrenToRemove: Element[] = [];
    for (const children of boardChildren) {
      if (children.hasAttribute("jiri")) {
        childrenToRemove.push(children);
      }
    }
    childrenToRemove.forEach((e) => e.remove());
  }

  colorSquares(squaresToColor: [number, number][], highlightColor: string) {
    const chessBoard = document.getElementsByTagName("chess-board")[0];
    const baseStyle = `background-color: ${highlightColor}; opacity: 0.4;`;
    for (const square of squaresToColor) {
      const newdiv = document.createElement("div");
      newdiv.className = `highlight square-${square[0]}${square[1]}`;
      newdiv.setAttribute("jiri", "");
      newdiv.style.cssText += baseStyle;
      chessBoard.appendChild(newdiv);
    }
  }
  createArrows() {
    // const chessBoard = document.getElementsByTagName("chess-board")[0];
    // const baseStyle = `fill: rgba(255, 170, 0, 0.8); opacity: 0.8`
    // const svgViewBox = chessBoard.getElementsByClassName("arrows")[0];
    // const testArrow = document.createElement("polygon");
    // testArrow.id = "arrow-d7d5"
    // testArrow.setAttribute("data-arrow", "d7d5")
    // testArrow.className = "arrow";
    // testArrow.setAttribute("jiri", "");
    // svgViewBox.appendChild(testArrow);



  }
}
