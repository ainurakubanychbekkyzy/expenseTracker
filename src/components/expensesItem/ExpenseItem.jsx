import React from "react";

import "./ExpensesItem.css";
import { ExpenseDate } from "../expensesDate/ExpenseDate";

export const ExpenseItem = (props) => {
   
      
  

  return (
    <div className="expense-item">

<ExpenseDate date={props.date} />


{/*  экспенсесДата деген компонентен  датаны алат */}

      <h2 className="expense-item__description">{props.title} </h2>

      {/* экспенсе деген атасынан  тайтл прайсты пропс аркылуу алат */}
      <div className="expense-item__price">{props.price}$</div>

      
    </div>
  );
};
