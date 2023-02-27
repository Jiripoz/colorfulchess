# Colorful Chess - Chrome Extension

Colorful Chess is a chrome extension made to be used on [chess.com](chess.com) and [lichess.com](lichess.com). It's purpose is to help the player to improve its understanding of the influence each piece exerts on the board.

## Installation

This project requires the `npm` package manager. To install it's dependencies, run the following command on the project folder:

```bash
# install dependencies
npm i

# build files to `/dist` directory
npm run build
```

## Load unpacked extensions

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
3. Click the `LOAD UNPACKED` button and select the `/dist` directory.

## Usage

White playing, open the extension popup and toggle which pieces you want.

In the current version it only works on [chess.com](www.chess.com). Future commits will be made to address this.
