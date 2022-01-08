import styled from "styled-components";
import { Cell } from "./interfaces";

export const GridContainer = styled.table`
    background: #fff;
    border-spacing: 0;
    border-collapse: collapse;
`
export const GridTbody = styled.tbody``

export const GridTr = styled.tr``

export const GridTd = styled.td<{ state: Cell }>`
    background: ${({ state }) => state ? '#fff' : '#000'};
    width: 10px;
    height: 10px;
    border: 1px solid #a3a3a3;
` 