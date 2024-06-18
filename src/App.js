import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses.jsx";
import { NewExpense } from "./components/newExpenses/NewExpense.jsx";

const dataEx = [
  {
    id: "el",
    title: "kindergarden",
    price: 200,

    date: new Date(2022, 5, 10),
  },
  {
    id: "el1",
    title: "paper",
    price: 2,

    date: new Date(2023, 6, 11),
  },
  {
    id: "el3",
    title: "apple",
    price: 5,

    date: new Date(2024, 3, 9),
  },
  {
    id: "el4",
    title: "some Course",
    price: 80,

    date: new Date(2024, 8, 5),
  },
];
//   негизи бул маалымааттар  бекендтен келет пока биз  ушундай кылып данныйларды массивке салып турдук
function App() {
  const [newExpenses, setNewExpenses] = useState(dataEx);
  // бул USeState реактын хуку   озгорунун байкоо учун колдонулат бул жерде инпуттан келген  данныйларды  лифтинг апп кылып алып и  экрандагы данныйлардын озгооруусу учун колдондук

  function addNewExpensesHAndler(product) {
    // жаны   продуктыларды алат

    setNewExpenses((prevExpenses) => {
      return [product, ...prevExpenses];
      //  жаны продуктыларды алат жанан мурункуларды спред оператор менен сактан калат
    });
  }
  return (
    <div>
      <NewExpense onGet={addNewExpensesHAndler} />

      {/* жаны товарларлардын данныйларын алуучу компаненттерди камтыйт жанан онгет деген пропс алкылуу  функцияны берип данныйларды апп компонентке которуп жатат*/}
      <Expenses data={newExpenses} />

      {/*   бул компонент алынган данныйларды карточка кылып   браузерге чыгарып берет  */}
    </div>
  );
}

export default App;
