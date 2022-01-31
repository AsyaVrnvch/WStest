import React from 'react'
import * as Styles from './Table.styles'
import { MessageState } from '../../../../../redux/reducers/ticker'

interface TableProps {
  orders: MessageState[]
  col: string
  color?: string
}

const Table: React.FC<TableProps> = ({ orders, col, color, children }) => {
  return (
    <Styles.Table>
      <thead>
        <tr>
          <Styles.TableTH>{children}</Styles.TableTH>
        </tr>
      </thead>
      <tbody>
        {orders &&
          orders.map((order) => (
            <tr key={String(order.time)}>
              <Styles.TableTD color={color}>{order[col]}</Styles.TableTD>
            </tr>
          ))}
      </tbody>
    </Styles.Table>
  )
}

export default Table
