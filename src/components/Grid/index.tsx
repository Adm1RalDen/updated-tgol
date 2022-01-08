import { FC } from "react"
import { GridContainer, GridTbody, GridTd, GridTr } from "./styles"
import { GridState } from "./interfaces"

export interface GridProps {
  gridState: GridState
}

const Grid: FC<GridProps> = ({ gridState }) => {
  return <GridContainer >
    <GridTbody>
      {
        gridState.map((gridRow, indexRow) => {
          return <GridTr key={indexRow}>
            {gridRow.map((gridCell, indexCol) => {
              if (gridCell === null) return;
              return <GridTd key={`${indexRow}-${indexCol}`} state={gridCell} />
            })}

          </GridTr>
        })
      }
    </GridTbody>
  </GridContainer>
}

export default Grid