import React from "react";
import { Chart} from "./Chart";

export const ExpenseChart = (props) => {
  const chartDataPoits = [

    //  бир массив ачып ага  12 айды ар бирин  оз озунчо обьект кылып сактадык 
    // ал обьектинин лабел жанан валуе деген ключу бар  лабел айдын аты  ал эми валуеге ошол айда канча расход болгону сакталат
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mart", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];


   for (let expense of props.data){
    //  фор менен   экспенсестен келген  дата деген массивдин ар бир обьектисин карап  обьектинин ичинен  дейт деген ключу аркылуу ацды алдык жана аны каррент манз деген  переменныйга сактап алдык

    const currentMonth=expense.date.getMonth()
    chartDataPoits[currentMonth].value+=expense.price


    //   жогоруда сактап алган массивдин  ичинндеги  обьектинин лабел  ключтары  бир бирине дал келсе анда ошол дал келген обьектилердин прайстарын кошобуз
   }

  return <div>
    <Chart dataPoints={chartDataPoits}/>

    {/*  чарт деген  компонентке  массивди  пропс кылып салып бердик */}
  </div>;
};
