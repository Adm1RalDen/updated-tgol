import { GridState } from "../components/Grid/interfaces";
import { calcNeighborsCount } from "./calcNeighborsCount";
import { getNeighborsIndexes } from "./getNeighborsIndexes";


export const generateNextGridState = (prevState: GridState) => {
  const newState: GridState = []

  prevState.forEach((row, indexRow) => {
    newState[indexRow] = []
    row.forEach((item, indexCol) => {
      if (item === null) {
        newState[indexRow][indexCol] = null
      } else {
        const neighborsIndexes = getNeighborsIndexes(indexRow, indexCol)
        const neighborsCount = calcNeighborsCount(neighborsIndexes, prevState)
        if (item === 0) {
          newState[indexRow][indexCol] = neighborsCount === 3 ? 1 : 0
        } else {
          newState[indexRow][indexCol] = item && (neighborsCount === 2 || neighborsCount === 3) ? 1 : 0
        }
      }
    })
  })

  return newState
}