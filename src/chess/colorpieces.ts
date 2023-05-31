import { PieceMovements } from "./piece_movements";
import type { ChessColor, ChessPiece, ChessPieceType, HangingHighlight, Hangingtype, HighlightConfig } from "../types/types";

export class PiecesManager {
  constructor(private whitePieces: ChessPiece[], private blackPieces: ChessPiece[]) {
    this.allPieces = this.whitePieces.concat(this.blackPieces);
  }
  allPieces: ChessPiece[];

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
    return this.allPieces.filter((piece) => piece.X == x && piece.Y == y).length != 0;
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

  calculateInfluence(highlightConfig: HighlightConfig | "All_Pieces"): Record<ChessColor, [number, number][]> {
    const whitesToColor: [number, number][] = [];
    const blackToColor: [number, number][] = [];
    
    if (highlightConfig=="All_Pieces"){
      const chesPieces = ["Pawns", "Knights", "Bishops", "Rooks", "Queen", "King"];
      for (const piece of chesPieces){
        blackToColor.push(...this.calculateInfluenceForPieces(this.blackPieces, "Black", <ChessPieceType>piece));
        whitesToColor.push(...this.calculateInfluenceForPieces(this.whitePieces, "White", <ChessPieceType>piece));
      } 
      const piecesToColor ={
        White: Array.from(new Set(whitesToColor)),
        Black: Array.from(new Set(blackToColor))
      }
      return piecesToColor
    }

    
    for (const key of Object.keys(highlightConfig.Black)) {
      if (highlightConfig.Black[key] == false) {
        continue;
      }
      blackToColor.push(...this.calculateInfluenceForPieces(this.blackPieces, "Black", <ChessPieceType>key));
    }
    for (const key of Object.keys(highlightConfig.White)) {
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

  calculateHanging(hangingConfig: HangingHighlight): Record<Hangingtype, [number,number][]> {
    const hangingBlack: [number, number][] = []
    const hangingWhite: [number, number][] = []
    const allPiecesInfluence = this.calculateInfluence("All_Pieces");
    if(hangingConfig.Hanging.HBlack){
      this.blackPieces.forEach((piece) => {
        const coordinates: [number, number] = [piece.X, piece.Y];
        if(!allPiecesInfluence.Black.some(influence => influence[0] === piece.X && influence[1] === piece.Y)){
          hangingBlack.push(coordinates);
        }})
      };
    if(hangingConfig.Hanging.HWhite){
      this.whitePieces.forEach((piece) => {
        const coordinates: [number, number] = [piece.X, piece.Y];
        if(!allPiecesInfluence.White.some(influence => influence[0] === piece.X && influence[1] === piece.Y)){
          hangingWhite.push(coordinates);
        }
      })
    }

    const hangingToColor = {
      HBlack: Array.from(new Set(hangingBlack)),
      HWhite: Array.from(new Set(hangingWhite))
    } 
    return hangingToColor
  }
}

// <div class="&quot;highlight square-58&quot;;" style="background-color: rgb(235, 97, 80); opacity: 0.8;"></div>
// <div class="highlight square-44" style="background-color: rgb(235, 97, 80); opacity: 0.8;" data-test-element="highlight"></div>
