import type { ChessColor, ChessPieceType, Position } from "../types/types";

export type PieceMovement = {
  lineDeltas?: [number, number][];
  fixedDeltas?: [number, number][];
};

const BasePieceMovements: Record<ChessPieceType, PieceMovement> = {
  Pawns: {},
  Knights: {
    fixedDeltas: [
      [2, 1],
      [1, 2],
      [2, -1],
      [1, -2],
      [-2, 1],
      [-1, 2],
      [-2, -1],
      [-1, -2],
    ],
  },
  Bishops: {
    lineDeltas: [
      [1, 1],
      [1, -1],
      [-1, -1],
      [-1, 1],
    ],
  },
  Rooks: {
    lineDeltas: [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ],
  },
  Queen: {
    lineDeltas: [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, -1],
      [-1, 1],
    ],
  },
  King: {
    fixedDeltas: [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, -1],
      [-1, 1],
    ],
  },
};

const WhitePieceMovements: Record<ChessPieceType, PieceMovement> = {
  ...BasePieceMovements,
  Pawns: {
    fixedDeltas: [
      [-1, 1],
      [1, 1],
    ],
  },
};

const BlackPieceMovements: Record<ChessPieceType, PieceMovement> = {
  ...BasePieceMovements,
  Pawns: {
    fixedDeltas: [
      [-1, -1],
      [1, -1],
    ],
  },
};

export const PieceMovements: Record<ChessColor, Record<ChessPieceType, PieceMovement>> = {
  White: WhitePieceMovements,
  Black: BlackPieceMovements,
};
