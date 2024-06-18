import React from 'react'
import "./Chart.css"
import { ChartBar } from './ChartBar'
export const Chart = (props) => {


     const dataValues=props.dataPoints.map((el)=>(el.value)

    //  экспенсес чарттан келген  массивди мап кылып  обьектилерди аралап ичиндеги валуе  деген ключ менен жаткан маанилерди 
     )
     const maxValue=Math.max(...dataValues)
    //   эн  чонун  маз мах обьектиси аркылуу  аныктап аны   переменныйга сактап алдык
  
  return (
    <div className='chart'> {props.dataPoints.map(el=>(<ChartBar maxValue={maxValue} label={el.label} value={el.value} key={el.label}/>))}</div>

    // экспенсес чарттан алынган  массивди  аралап кайра  чартбар деген компонентке салдык  жана ушул компонентен аныктаган  максималный прайсты да жоноттук 
  )
}
