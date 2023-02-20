// about coloring
function splitCoordinates(coordinate) {
  const x = +coordinate.charAt(0);
  const y = +coordinate.charAt(1);
  return [x, y];
}
function uniteCoordinates(coordinates) {
  return (coordinates[0] * 10 + coordinates[1]).toString();
}
function isOnBoard(coordinates) {
  if (coordinates[0] > 8 || coordinates[0] < 1) {
    return false;
  } else if (coordinates[1] > 8 || coordinates[1] < 1) {
    return false;
  } else {
    return true;
  }
}

function checkInfluence(influence, controledSquares) {
  for (const key of Object.keys(influence)) {
    for (const coordinate of influence[key]) {
      if (isOnBoard(coordinate)) {
        controledSquares.push(uniteCoordinates(coordinate));
      }
    }
  }
  return;
}

function diagonalInfluence(x, y, allPiecesCoordinates) {
  let leftX = x;
  let rightX = x;
  let northY = y;
  let southY = y;

  let deltaX = 1;
  let deltaY = 1;
  //   northeast
  while (newX > 9 && newX < 1 && newY > 9 && newY < 1) {
    if [x + deltaX, y - deltaY] in allPiecesCoordinates;
    x - deltaY, y - deltaY;
    x - deltaY, y + deltaY;
    x + deltaY, y + deltaY;
    deltaY += 1;
    deltaX += 1;
  }
}

function lineInfluence(x, y, allPiecesCoordinates) {}

export function pawnPattern(coordinates, color) {
  const controledSquares = [];
  if (color == "w") {
    for (let i = 0; i <= coordinates.length - 1; i++) {
      const [x, y] = splitCoordinates(coordinates[i]);
      const dynamicInfluence = [];
      const staticInfluence = [[1, 1], [-1, 1]]
      checkInfluence(dynamicInfluence, staticInfluence, controledSquares);
    }
  } else if (color == "b") {
    for (let i = 0; i <= coordinates.length - 1; i++) {
      const [x, y] = splitCoordinates(coordinates);
      const dynamicInfluence = [];
      const staticInfluence = [[1, -1], [-1, -1]]
      
      checkInfluence(dynamicInfluence, staticInfluence, controledSquares);
    }
  }
  return new Set(controledSquares);
}

export function knightPattern(coordinates) {
  const controledSquares = [];
  for (let i = 0; i <= coordinates.length; i++) {
    const [x, y] = splitCoordinates(coordinates[i]);
    const influence = {
      nne: [[x + 1, y + 2]],
      nee: [[x + 2, y + 1]],
      see: [[x + 2, y - 1]],
      sse: [[x + 1, y - 2]],
      ssw: [[x - 1, y - 2]],
      sww: [[x - 2, y - 1]],
      nww: [[x - 2, y + 1]],
      nnw: [[x - 1, y + 2]],
    };
    checkInfluence(influence, controledSquares);
  }
  return new Set(controledSquares);
}

export function bishopPattern(coordinates, allPiecesCoordinates) {
  const controledSquares = [];
  for (let i = 0; i <= coordinates.length; i++) {
    const [x, y] = splitCoordinates(coordinates[i]);
    const influence = {
      diagonal: diagonalInfluence(x, y, allPiecesCoordinates),
    };
    checkInfluence(influence, controledSquares);
  }
  return new Set(controledSquares);
}

export function rookPattern(coordinates, allPiecesCoordinates) {
  const controledSquares = [];
  for (let i = 0; i <= coordinates.length; i++) {
    const [x, y] = splitCoordinates(coordinates[i]);
    const influence = {
      lines: lineInfluence(x, y),
    };
    checkInfluence(influence, controledSquares);
  }
  return new Set(controledSquares);
}

export function queenPattern(coordinates, allPiecesCoordinates) {
  const controledSquares = [];
  for (let i = 0; i <= coordinates.length; i++) {
    const [x, y] = splitCoordinates(coordinates[i]);
    const influence = {
      diagonal: diagonalInfluence(x, y),
      lines: lineInfluence(x, y),
    };
    checkInfluence(influence, controledSquares);
  }
  return new Set(controledSquares);
}

export function kingPattern(coordinates) {
  const controledSquares = [];
  for (let i = 0; i <= coordinates.length; i++) {
    const [x, y] = splitCoordinates(coordinates[i]);
    const influence = {
      north: [[x, y + 1]],
      northeast: [[x + 1, y + 1]],
      east: [[x + 1, y]],
      southeast: [[x + 1, y - 1]],
      south: [[x, y - 1]],
      southwest: [[x - 1, y - 1]],
      west: [[x - 1, y]],
      northwest: [[x - 1, y + 1]],
    };
    checkInfluence(influence, controledSquares);
  }
  return new Set(controledSquares);
}
