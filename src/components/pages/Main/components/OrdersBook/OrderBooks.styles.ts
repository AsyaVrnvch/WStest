import styled from 'styled-components'

export const OrdersBookContainer = styled.div`
  margin: 30px auto;
  max-height: 315px;
  width: 600px;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: #111722;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0d1017;
  }
  ::-webkit-scrollbar-thumb {
    background: #2d2e32;
    border-radius: 5px;
  }
`

export const OrdersBookName = styled.div`
  text-align: center;
  font-weight: 700;
  padding: 10px 0;
`

export const OrdersTableContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
