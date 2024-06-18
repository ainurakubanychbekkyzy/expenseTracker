import React from 'react'
import "./ExpemnsesFilter.css"
export const ExpensesFilter = (props) => {
  function selectHandler(e){
//  бул функция тандалган жылды алуу учун  экспенсес деген атасынан  онселект деген состояния озгортуучу    функцияны алат  агаг тандалган  маанини салып берет 


    props.onSelect(e.target.value)
  }
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
           <label htmlFor="">select by year</label>
           <select  value={props.selected}onChange={selectHandler}>

              {/*  бул  жерде  селектин валуе деген  атрибутуна  экспенсестен келген   селектед деген состоянияга  салып берет ончейнч аркылуу кайра кайра озгоргон жылды салып берет */}


            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="all">all</option>
           </select>
        </div>
    </div>
  )
}
