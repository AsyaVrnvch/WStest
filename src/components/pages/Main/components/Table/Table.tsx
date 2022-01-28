import React from 'react'
import { useEffect, useState } from 'react'
import * as Styles from './Table.styles'
import { connectWS, getMessage, closeWS } from '../../../../../redux/actions/TickerActions'
import { useDispatch, useSelector } from 'react-redux'
import { OrderState } from '../../../../../redux/reducers/ticker'
import { selectAllOrders } from '../../../../../redux/selectors/ticker'

const Table: React.FC = () => {
  const dispatch = useDispatch()
  const allOrders = useSelector(selectAllOrders)
  console.log(allOrders)

  useEffect(() => {
    dispatch(connectWS({ callback: getMessageWS }))
  }, [])

  const getMessageWS = (data: OrderState) => {
    dispatch(getMessage(data))
  }

  const stop = () => {
    dispatch(closeWS())
  }

  return (
    <>
      <button onClick={stop}>Stop</button>
      <Styles.TableContainer>
        <thead>
          <tr>
            <th>Книга ордеров</th>
          </tr>
          <tr>
            <th>Размер(FTT)</th>
            <th>Бид(USD)</th>
            <th>Аск(USD)</th>
            <th>Размер(FTT)</th>
          </tr>
        </thead>
        <tbody>
          {allOrders &&
            allOrders.map((order) => (
              <tr key={String(order.time)}>
                <td>{order.bidSize}</td>
                <td>{order.bid}</td>
                <td>{order.ask}</td>
                <td>{order.askSize}</td>
              </tr>
            ))}
        </tbody>
      </Styles.TableContainer>
    </>
  )
}

export default Table
