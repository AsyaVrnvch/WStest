import React from 'react'
import { useEffect } from 'react'
import * as Styles from './OrderBooks.styles'
import { connectWS, getMessage, closeWS } from '../../../../../redux/actions/TickerActions'
import { useDispatch, useSelector } from 'react-redux'
import { OrderState } from '../../../../../redux/reducers/ticker'
import { selectAskOrders, selectBidOrders } from '../../../../../redux/selectors/ticker'
import Table from '../Table/Table'

const OrdersBook: React.FC = () => {
  const dispatch = useDispatch()
  const askOrders = useSelector(selectAskOrders)
  const bidOrders = useSelector(selectBidOrders)

  useEffect(() => {
    connect()
  }, [])

  const connect = () => {
    dispatch(connectWS({ callback: getMessageWS }))
  }

  const getMessageWS = (data: OrderState) => {
    dispatch(getMessage(data))
  }

  const stop = () => {
    dispatch(closeWS())
  }

  return (
    <>
      <button onClick={connect}>Start</button>
      <button onClick={stop}>Stop</button>
      <Styles.OrdersBookContainer>
        <Styles.OrdersBookName>Книга ордеров</Styles.OrdersBookName>
        <Styles.OrdersTableContainer>
          <Table orders={bidOrders} col="size">
            Размер(FTT)
          </Table>
          <Table orders={bidOrders} col="value" color="#ff3b69">
            Бид(USD)
          </Table>
          <Table orders={askOrders} col="value" color="#02c77a">
            Аск(USD)
          </Table>
          <Table orders={askOrders} col="size">
            Размер(FTT)
          </Table>
        </Styles.OrdersTableContainer>
      </Styles.OrdersBookContainer>
    </>
  )
}

export default OrdersBook
