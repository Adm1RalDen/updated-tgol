import { GridState } from "../components/Grid/interfaces";

export const calcNeighborsCount = (indexes: Array<Array<number>>, grid: GridState): number => {
  return indexes.reduce((count, [row, col]) => {
    const item = grid[row][col]
    return count + Number(item)
  }, 0);
}