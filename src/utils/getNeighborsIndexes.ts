
export const getNeighborsIndexes = (rowIndex: number, colIndex: number): Array<Array<number>> => {
  return [
    [rowIndex - 1, colIndex - 1],
    [rowIndex - 1, colIndex],
    [rowIndex - 1, colIndex + 1],
    [rowIndex, colIndex + 1],
    [rowIndex + 1, colIndex + 1],
    [rowIndex + 1, colIndex],
    [rowIndex + 1, colIndex - 1],
    [rowIndex, colIndex - 1]
  ]
}