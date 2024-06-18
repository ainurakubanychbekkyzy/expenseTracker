import React, { useState } from "react";
import { ExpenseItem } from "../expensesItem/ExpenseItem";
import { ExpensesFilter } from "../expensesFilter/ExpensesFilter";
import "./Expenses.css";
import { Card } from "../ui/Card";
import { ExpenseChart } from "./ExpenseChart";

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2024");

  //    жылдарга карата  сорттировка кылуу учун 

  function selectYearHandler(year) {

    //  бул Функцияга   экспенсес фильтр  компонентинен   жылдар келет 
    setSelectedYear(year);
    //   ошол жылды ачылган  состоянын озгортуучу  функциясына салып беребиз
  }

  const filteredExpenses = props.data.filter((expense) => {


    //   фильтрленген экспенсес деген бир переменный ачып ага  просп аркылуу апптан келген датаны  массивдин фильтр методу менен  аралап  
    return expense.date.getFullYear().toString() === selectedYear;

    // ар бир экспенсестин  ичиндеги  дейта деген  ключи аркылуу сактан  датанын жылын  алып  аны  стринге алмаштырып  экспенсес фильтрден келген селестедЕер  менен барабарлайбыз
  });
   let expenseContent= <p style={{ color: "red", textAlign: "center" }}>not found</p>

//  озунчо бир  переменныйга   табылган  жок деген текс менен сактап койдук жана бул переменный аркылуу   тандалган жылдын ичинде жок болсо ушул переменный чакырып коебуз
    if (selectedYear==="all"){

      //  тандалган  жылдын   мааниси олл болсо анда 
      expenseContent= props.data.map((el) => (


        //  экспенсе контентин  ичине пропс аркылуу  апптан келген датаны  мап кылып  баардык  обьектилерди   ар бир   ар ключун  
        <ExpenseItem
        // экспенсе айтемге 
        

          key={el.id}
          
          title={el.title}
          price={el.price}
          date={el.date}
          //  кей, тайтл, прайс, дата деген  ключтар менен сакталган  маалыматтарын  пропс аркылуу салып беребиз
        />
      ))
    }
    if(filteredExpenses.length > 0){


      //   ал эми  фильтрленген экспенсестин  узундугу нолдон чог болсо анда 



      expenseContent=filteredExpenses.map((el) => (
        // экспенсес контентин ичине  жыл боюнча фильтрленген  элементтерди мап кылып ар бир  элементин ылп аны 
        // экспенсес айтемге пропс аркылуу  салып беребиз

      <ExpenseItem
        key={el.id}
        title={el.title}
        price={el.price}
        date={el.date}
      />
    ))}
 





  return (
    <Card className="expenses">

      {/*  контейнер компонент */}
      <ExpensesFilter onSelect={selectYearHandler} selected={selectedYear} />

      {/*  экспенсес  фильтр   контролдолуучу  компонент  состоянияны  пропс аркылуу алат и ага талдалган жылды сактап   кайра атасына талган жылды лифтинг апп кылып  которуп берет*/}


      <ExpenseChart data={filteredExpenses}/>

      {/*  бул компонент  статистканын диограмма аркылуу тушундуруучу компонент */}
      {/* {filteredExpenses.map((el) => (
        //   фильтрленген   экспенсети мап кылып  экспенсес айтемге  пропс аркылуу элементтиг айдисин, тайтлын, прайсын, датасын салып беребиз
        <ExpenseItem
          key={el.id}
          title={el.title}
          price={el.price}
          date={el.date}
        />
      ))} */}


   
      {expenseContent}

      {/*  эгер жогорудагы  иф аркылуу  берилген шарттардын эч бири туура келбесе анда экспенсес контент озу кыгат анын ичинде табылган жок деген текс бар */}

      {/* {selectedYear === "all" &&
        props.data.map((el) => (
          <ExpenseItem
            key={el.id}
            title={el.title}
            price={el.price}
            date={el.date}
          />
        ))}

      {filteredExpenses.length === 0 && selectedYear !== "all" && (
        <p style={{ color: "red", textAlign: "center" }}>not fount</p>
      )} */}
    </Card>
  );
};
