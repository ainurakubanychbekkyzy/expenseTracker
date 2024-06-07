 import { ExpenseItem } from "./components/ExpenseItem";
import { Expenses } from "./components/Expenses";
 
 const data=[
  {
    id: "el",
    title: "kindergarden",    
    price: 200,

    date:  new Date(2024, 5, 10)
  },
  {
    id: "el1",
    title: "paper",    
    price: 2,

    date:  new Date(2024, 6, 11)
  },
  {
    id: "el3",
    title: "apple",    
    price: 5,

    date:  new Date(2024, 3, 9)
  },
  {
    id: "el4",
    title: "some Course",    
    price: 80,

    date:  new Date(2024, 8, 5)
  },
 ]

function App() {
  return (
    <div>
<Expenses data={data}/>
    </div>
  );
}

export default App;


