import React from 'react'
import { ExpenseInput } from '../expensesForm/ExpenseInput'
import "./NewExpenses.css"

export const NewExpense = ({onGet}

  // онгет деген пропс алат

) => {


   function getPROduct(data){

    //   бул функция баласынан тактап айтканда   экспенсеИнпутттан данныйларды алат 

     const idWithData={
      //  жанын переменага салынган данныйдарды сактайт
      id: Math.random().toString(), ...data  
      //  алынган  данныйларга   мазрандом аркылуу айдилерди бердик жана  маз рандомдон келген айдилер номбер болгон учун аны стринге айландырдык жана спред опертор аркылуу салып бердик   (без спред салсак эмне болмок)


     }
 
   
   onGet(idWithData) 
  //  онгет деп   пропс аркылуу келген функцияга  алынган данныйды айдиси менен салып бердик ошентип  баласынан алынган маалыматтык бул компонент  озунун атасына берди

   }




  return (
    <div className='new-expense' ><ExpenseInput getAdd={getPROduct}/></div>

    // экспенсе инпут ню экспенсестин баласы жанан ананын ичинде  бир нече инпут бар 

  )
}
