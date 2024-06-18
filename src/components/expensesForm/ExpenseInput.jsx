import React, { useState } from 'react'
import "./expenseInput.css"

export const ExpenseInput = ({getAdd}) => {



  // инпуттардагы данныйларды алуучу компонент  гетАдд вупут пропс аркылуу атасына данныйларды берет

  const [inputTitle,  setInputTitle]=useState("")
  const[inputPrice, setInputPrice]=useState(0)
  const [inputDate, setInputDate]=useState()



  //    жогорудагы уч  состояния  уч инпуттун   ичинеде жазылган маалымттарды алуу учун колдонулаи

function titleHandler(e){
 setInputTitle(e.target.value)  
  //   тайтл учун учун ачылган юзстейттин озгорууну  байкоочу  функциясы   чакырылып эвент аркылуу басвлган элементтин   валуе деген атрибуту алкылуу  инпуттун ичндеги маалыматты алууды
}
//  бул функция    инпуттун ичиндеги тайтлды алуу учун колдонулат

function priceHandler(e){
 setInputPrice(e.target.value)

   //    прайс  учун ачылган юзстейттин озгорууну  байкоочу  функциясы   чакырылып эвент аркылуу басвлган элементтин   валуе деген атрибуту алкылуу  инпуттун ичндеги маалыматты алууды

}

function dateHandler(e){

 setInputDate(e.target.value)

   //    дата учун учун ачылган юзстейттин озгорууну  байкоочу  функциясы   чакырылып эвент аркылуу басвлган элементтин   валуе деген атрибуту алкылуу  инпуттун ичндеги маалыматты алууды

}

function submitHandler() {
  if("price"===""){
     alert("writing")
     return

  }


  //    бул    функция  адд кылганда  даныйларды кошуучу 


const product={

  // кошулуучу  продукттынын ар бир маалыматтын ключтар аркылууберип  бир обьект кылып салып беребиз
 title: inputTitle, 
//  тайтл деген ключ аркылуу   тайтл  учун ачылган состояния сактайбыз анткени   тайтылдын инпутуна жазылган ар  бир маалымат ошол состоянияга  барып тушот 
 price: Number(inputPrice),
//   прайс  деген   ключ аркылуу    прайстын  состояниясын   сактайбыз жанан аны намберге алмаштырабыз анткени инпуттан келген данный стринг болуп келет
 date: new Date(inputDate)

//   дейт деген ключ аркылуу  датаны  сатайбыз анын тю дейтке салабвз анкени дата озу обьект болуп келет
}

 getAdd(product)
//     гет адд   функциясын пропс аркылуу алып ага чогулткан  обьектини салып беребиз  анан бул функция атасына ушул  обьектини   жеткирип берет 


console.log(product);
setInputDate( " ")
//    акыркы жазылган маалыматты сабмит кылгандан кийин  тазалоо учун  озгортуучу функцияны чакырабыз
 setInputPrice("")
 //    акыркы жазылган маалыматты сабмит кылгандан кийин  тазалоо учун  озгортуучу функцияны чакырабыз
 setInputTitle("")
 //    акыркы жазылган маалыматты сабмит кылгандан кийин  тазалоо учун  озгортуучу функцияны чакырабыз


}
return (
 <div  className='new-expense__controls '>
 {/*    роот элемент */}

<div className='new-expense__control'>
  {/*  ар бир   инпуттун озунун контейнери бар элементи  */}
 <label > title </label>
  <input  type='text' className='title ' value={inputTitle} onChange={titleHandler}  />
  {/*   инпут тайпы текс жана бул  валуе деген атрибутана  состояния беребиз ошол учун арбир жазылган ээлемент    ошол состояныга барып тушот  ончейнч аркылуу  озгортуучу функцияны беребиз анын ичинде юзстейттин  экинчи  функциясы  чакырылган жана озгорууну байкайт */}
</div>
<div className='new-expense__control'>
 <label> price </label>
  <input  type='number'   className='price'  value={inputPrice}  onChange={priceHandler} />
</div>
<div className='new-expense__control'>
 <label> Data </label>
  <input  type='date'   value={inputDate} onChange={dateHandler} />
</div>
 
<div className='new-expense__actions'> 
<button  onClick={submitHandler}>add  to list</button></div>

{/*    адд ту лист деген функция   бул сабмит кылат */}

    
    
  
 </div>
)
}
