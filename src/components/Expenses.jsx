import React from 'react'
import { ExpenseItem } from './ExpenseItem'

export const Expenses = (props) => {

     const data=props.data
  return (
    <div>

<ExpenseItem title={data[0].title} price={data[0].price }id={data[0].id}   date={data[0].date}  />

    </div>
  )
}
