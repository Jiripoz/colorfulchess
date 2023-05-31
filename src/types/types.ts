export type ChessColor = "Black" | "White";

export type ChessPieceType = "Pawns" | "Knights" | "Bishops" | "Rooks" | "Queen" | "King";
export type TactitcalType = "Influence" | "Hanging" | "Fork" | "Pin";

export type UpdateDisplayFirstKey = ChessColor;
export type UpdateDisplaySecondKey = ChessPieceType | TactitcalType;

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

export type PiecesFilter = {
  Pawns: boolean;
  Knights: boolean;
  Bishops: boolean;
  Rooks: boolean;
  Queen: boolean;
  King: boolean;
};

export type HangingHighlight = Record<"Hanging",{
  HBlack: boolean,
  HWhite: boolean,
}>

export type ArrowHighlight = Record<"Arrow",{State: boolean}>

export type PiecesToHighlight = Record<ChessColor, PiecesFilter>;

export type HighlightConfig = PiecesToHighlight & HangingHighlight & ArrowHighlight;

export type HEXColor = string;

export type TacticalFilter = {
  Influence: HEXColor;
  Hanging: HEXColor;
  Fork: HEXColor;
  Pin: HEXColor;
}

export type SettingsType = Record<ChessColor, TacticalFilter>;

