export type ChessColor = "Black" | "White";
export type ChessPieceType = "Pawns" | "Knights" | "Bishops" | "Rooks" | "Queen" | "King";

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

export type PiecesFilter = {
  Pawns: boolean;
  Knights: boolean;
  Bishops: boolean;
  Rooks: boolean;
  Queen: boolean;
  King: boolean;
};

export type PiecesToHighlight = Record<ChessColor, PiecesFilter>;
