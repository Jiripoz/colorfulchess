import { PieceMovements } from "./piece_movements";
import type { ChessColor, ChessPiece, ChessPieceType, Highlight, PiecesToHighlight } from "../types/types";

export class PiecesManager {
  constructor(private whitePieces: ChessPiece[], private blackPieces: ChessPiece[]) {
    this.allPiecesCoordinates = this.whitePieces.concat(this.blackPieces);
  }
  allPiecesCoordinates: ChessPiece[];

  verifyBoardLimit(x: number, y: number) {
    if (x < 1 || x > 8) {
      return false;
    } else if (y < 1 || y > 8) {
      return false;
    } else {
      return true;
    }
  }
  verifyColision(x: number, y: number): boolean {
    return this.allPiecesCoordinates.filter((piece) => piece.X == x && piece.Y == y).length != 0;
  }
  calculateInfluenceForPieces(pieces: ChessPiece[], color: ChessColor, key: ChessPieceType) {
    const squaresToColor: [number, number][] = [];
    pieces
      .filter((piece) => piece.type == key)
      .forEach((piece) => {
        const movements = PieceMovements[color][key];
        movements.lineDeltas?.forEach((vector) => {
          let newX = piece.X + vector[0];
          let newY = piece.Y + vector[1];
          while (this.verifyBoardLimit(newX, newY)) {
            if (this.verifyColision(newX, newY)) {
              squaresToColor.push([newX, newY]);
              break;
            }
            squaresToColor.push([newX, newY]);
            newX = newX + vector[0];
            newY = newY + vector[1];
          }
        });
        movements.fixedDeltas?.forEach((vector) => {
          let newX = piece.X + vector[0];
          let newY = piece.Y + vector[1];
          if (this.verifyBoardLimit(newX, newY)) {
            squaresToColor.push([newX, newY]);
          }
        });
      });
    return squaresToColor;
  }

  calculateInfluence(highlightConfig: PiecesToHighlight): Record<ChessColor, [number, number][]> {
    const squaresToColor: [number, number][] = [];
    const whitesToColor: [number, number][] = [];
    const blackToColor: [number, number][] = [];

    for (const key of Object.keys(highlightConfig.Black)) {
      if (highlightConfig.Black[key] == false) {
        continue;
      }
      blackToColor.push(...this.calculateInfluenceForPieces(this.blackPieces, "Black", <ChessPieceType>key));
    }
    for (const key of Object.keys(highlightConfig.Black)) {
      if (highlightConfig.White[key] == false) {
        continue;
      }
      whitesToColor.push(...this.calculateInfluenceForPieces(this.whitePieces, "White", <ChessPieceType>key));
    }
    const piecesToColor = {
      White: Array.from(new Set(whitesToColor)),
      Black: Array.from(new Set(blackToColor)),
    };
    return piecesToColor;
  }
}

// <div class="&quot;highlight square-58&quot;;" style="background-color: rgb(235, 97, 80); opacity: 0.8;"></div>
// <div class="highlight square-44" style="background-color: rgb(235, 97, 80); opacity: 0.8;" data-test-element="highlight"></div>
