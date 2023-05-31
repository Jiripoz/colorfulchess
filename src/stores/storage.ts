import type { ChessPiecesBridge } from "src/bridges/bridge";
import type { HEXColor, HighlightConfig, SettingsType, UpdateDisplayFirstKey, UpdateDisplaySecondKey } from "../types/types";

export const defaultHighlight: HighlightConfig = {
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
  Hanging: {
    HBlack: false,
    HWhite: false,  
  },
  Arrow: {
    State: false,
  }
};

export const highlightConfig = {
  get: (): Promise<HighlightConfig> => chrome.storage.sync.get(defaultHighlight) as Promise<HighlightConfig>,

  set: (newfilter: HighlightConfig): Promise<void> => chrome.storage.sync.set(newfilter),
};

export const updateHighlightConfig: (key1: UpdateDisplayFirstKey, key2: UpdateDisplaySecondKey) => Promise<void> = async (key1, key2) => {
  const config = await highlightConfig.get();
  config[key1][key2] = !config[key1][key2];
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


const defaultSettings: SettingsType = {
  Black: {
    Influence: "#149eaf",
    Fork: "#149eaf",
    Hanging: "#149eaf",
    Pin: "#149eaf",
  },
  White: {
    Influence: "#eb6150",
    Fork: "#eb6150",
    Hanging: "#eb6150",
    Pin: "#ffaa01",
  }
}

export const settingsStorage = {
  get: (): Promise<SettingsType> => chrome.storage.sync.get(defaultSettings) as Promise<SettingsType>,

  set: (settings: SettingsType): Promise<void> => chrome.storage.sync.set(settings),
};

export const updateSettingsStorage: (key1: UpdateDisplayFirstKey, key2: UpdateDisplaySecondKey, hexValue: HEXColor) => Promise<void> = async (key1, key2, hexValue) => {
  const settings = await settingsStorage.get();
  settings[key1][key2] = hexValue;
  await settingsStorage.set(settings);
};