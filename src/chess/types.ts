export type ChessColor = "Black" | "White";
export type ChessPieceType =
  | "Pawn"
  | "Knight"
  | "Bishop"
  | "Rooks"
  | "Queen"
  | "King";

export type ChessPiece = {
  X: number;
  Y: number;
  type: ChessPieceType;
  color: ChessColor;
};
export type Position = {
  X: number;
  Y: number;
};

export type Highlight = {
  X: number;
  Y: number;
  color: string;
  opacity: number;
};

export type HighlightConfig = {
  piecesToHighlight: {
    type: ChessPieceType;
    color: ChessColor;
  }[];
};
