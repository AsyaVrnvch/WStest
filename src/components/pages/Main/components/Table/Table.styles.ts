import styled from 'styled-components'

export const Table = styled.table`
  width: 25%;
  text-align: center;
  border-collapse: collapse;
`

export const TableTH = styled.th`
  color: #ffffff80;
  padding-bottom: 10px;
  font-weight: 300;
`
export const TableTD = styled.td<{ color: string }>`
  border-top: 1px solid #e3dede80;
  border-bottom: 1px solid #e3dede80;
  padding: 5px 0;
  font-size: 12px;
  color: ${(props) => props.color};
`
