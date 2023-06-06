
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/newExpenses/NewExpense";
//import components
function App() {

  //implement the components into the code
  //Make sure to capitalize the name of the component
  //this helps to see the difference between regular tags and custom components. 
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expense expense = {expenses}/>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
