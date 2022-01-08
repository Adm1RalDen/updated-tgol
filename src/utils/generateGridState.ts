import { GridState } from "../components/Grid/interfaces";

export const generateGridState = (gridSize = 50): GridState => {
  const borderedSize = gridSize + 2
  const grid = Array(borderedSize).fill(0).map((_, indexRow) => {
    const newRow = Array(borderedSize).fill(0).map((_, indexColumn) => {
      if (indexRow === 0 || indexRow === borderedSize - 1 || indexColumn == 0 || indexColumn === borderedSize - 1) {
        return null
      }
      return Math.round(Math.random());
    })

    return newRow
  })

  return grid
}