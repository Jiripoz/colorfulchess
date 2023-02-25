import type { ChessPiecesBridge } from "src/bridges/bridge";
import type { ChessColor, ChessPiece, PiecesToHighlight } from "../types/types";

export const defaultHighlight: PiecesToHighlight = {
  Black: {
    Pawns: false,
    Knights: false,
    Bishops: false,
    Rooks: false,
    Queen: false,
    King: false,
  },
  White: {
    Pawns: false,
    Knights: false,
    Bishops: false,
    Rooks: false,
    Queen: false,
    King: false,
  },
};

export const highlightConfig = {
  get: (): Promise<PiecesToHighlight> => chrome.storage.sync.get(defaultHighlight) as Promise<PiecesToHighlight>,

  set: (newfilter: PiecesToHighlight): Promise<void> => chrome.storage.sync.set(newfilter),
};

export const updateHighlightConfig: (color: ChessColor, piece: string) => Promise<void> = async (color, piece) => {
  const config = await highlightConfig.get();
  config[color][piece] = !config[color][piece];
  await highlightConfig.set(config);
};

const defaultSquareStore: string[] = [];
let defaultbridge: string | undefined;

export const squareStorage = {
  get: (): Promise<string[]> => chrome.storage.sync.get(defaultSquareStore) as Promise<string[]>,

  set: (updateSquares: string[]): Promise<void> => chrome.storage.sync.set(updateSquares),
};

export const bridgeStorage = {
  get: (): Promise<ChessPiecesBridge> => chrome.storage.sync.get(defaultbridge) as Promise<ChessPiecesBridge>,

  set: (bridge: ChessPiecesBridge): Promise<void> => chrome.storage.sync.set(bridge),
};
