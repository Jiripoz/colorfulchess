import { PieceMovements } from "./piece_movements";
import type { ChessPiece, Highlight, HighlightConfig } from "./types";

export class PiecesManager {
  constructor(
    private whitePieces: ChessPiece[],
    private blackPieces: ChessPiece[]
  ) {}
  getAllCoordinates() {
    const allPiecesCoordinates = this.whitePieces
      .concat(this.blackPieces)
      .map((piece) => (piece.X * 10 + piece.Y).toString());
    return allPiecesCoordinates;
  }

  calculateInfluence(highlightConfig: HighlightConfig) {}
}

// export class ChessPieces {
//   constructor(color) {
//     this.color = color;
//     this.pawns = ;
//     this.knights = ;
//     this.bishops = ;
//     this.rooks = ;
//     this.queen = ;
//     this.king = ;
//   }
//   color: string;
//   pawns: HTMLCollectionOf<Element>;
//   knights: HTMLCollectionOf<Element>;
//   bishops: HTMLCollectionOf<Element>;
//   rooks: HTMLCollectionOf<Element>;
//   queen: HTMLCollectionOf<Element>;
//   king: HTMLCollectionOf<Element>;

//   class Bishops{

//   }
//   colorPawns() {
//     const coordinates = this.getCoordinates("p", this.pawns);
//     const controledSquares = generatePattern(coordinates, this.color);
//     return controledSquares;
//   }
//   colorKnights() {
//     const coordinates = this.getCoordinates("n", this.knights);
//     const dynamicInfluence = [];
//     const staticInfluence = [
//       [1, 2],
//       [2, 1],
//       [2, -1],
//       [1, -2],
//       [-1, -2],
//       [-2, -1],
//       [-2, 1],
//       [-1, 2],
//     ];
//     const controledSquares = generatePattern(dynamicInfluence, staticInfluence);
//     return controledSquares;
//   }
//   colorBishops() {
//     const coordinates = this.getCoordinates("b", this.bishops);
//     const dynamicInfluence = [];
//     const staticInfluence = [];
//     const controledSquares = generatePattern(coordinates);
//     return controledSquares;
//   }
//   colorRooks() {
//     const coordinates = this.getCoordinates("r", this.rooks);
//     const dynamicInfluence = [];
//     const staticInfluence = [];
//     const controledSquares = generatePattern(coordinates);
//     return controledSquares;
//   }
//   colorQueen() {
//     const coordinates = this.getCoordinates("q", this.queen);
//     const dynamicInfluence = [];
//     const staticInfluence = [];
//     const controledSquares = generatePattern(coordinates);
//     return controledSquares;
//   }
//   colorKing() {
//     const coordinates = this.getCoordinates("k", this.king);
//     const dynamicInfluence = [];
//     const staticInfluence = [];
//     const controledSquares = generatePattern(coordinates);
//     return controledSquares;
//   }
//   colorBoard(pawns, knights, bishops, rooks, queen, king) {
//     squaresToColor = [];
//     if (pawns) squaresToColor.push(this.colorPawns());
//     if (knights) squaresToColor.push(this.colorKnights());
//     if (bishops) squaresToColor.push(this.colorBishops());
//     if (rooks) squaresToColor.push(this.colorRooks());
//     if (queen) squaresToColor.push(this.colorRooks());
//     if (king) squaresToColor.push(this.colorKing());
//   }
// }

// const whitePieces = new ChessPieces((color = "w"));
// const blackPieces = new ChessPieces((color = "b"));

// whitePieces.colorPawns();
