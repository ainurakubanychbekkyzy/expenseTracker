import React from "react";
import { useState } from "react";
import "./ExpensesItem.css";
import { ExpenseDate } from "./ExpenseDate";

export const ExpenseItem = (props) => {
   
      
  

  return (
    <div className="expense-item">



      <h2 className="expense-item__description">{props.title} </h2>
      <div className="expense-item__price">{props.price}</div>

      <ExpenseDate date={props.date} />
    </div>
  );
};
