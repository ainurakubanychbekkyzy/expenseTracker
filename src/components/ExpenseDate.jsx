import React from 'react'
import "./ExpensesDate.css"

export const ExpenseDate = ({date}) => {

    const day=date.toLocaleString("en-US", {day: 'numeric' })
    const month=date.toLocaleString("en-US", {month: 'long' })
    const year=date.toLocaleString("en-US", {year: 'numeric' })
  return (
    <div  className='expense-date'>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year '>{year}</div>
    </div>
  )
}
