import React from 'react'
import "./ChartBar.css"

export const ChartBar = (props) => {


  let barHeight= "%"
  // процентке жараша   шкаланын  толтуруу 
  if(props.maxValue>0){

    //  максималный баа нолдон чон болсо анда 
    // бархейтти пропстан келген  бааны  максимальный прайска болуп аны 100го кобойтуу  керек 
    barHeight=Math.round((props.value/props.maxValue)*100) + "%"
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}
