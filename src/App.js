import React, {useState} from 'react';
import Expenses from  './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Car Insurance', 
      amount: 294.67, 
      date: new Date(2021, 2, 29)
    },
    {
      id: 'e2',
      title: 'Van Insurance', 
      amount: 183.67, 
      date: new Date(2021, 5, 21)
    },
    {
      id: 'e3',
      title: 'Bike Insurance', 
      amount: 123.65, 
      date: new Date(2021, 3, 25)
    },
    {
      id: 'e4',
      title: 'Bus Insurance', 
      amount: 292.63, 
      date: new Date(2021, 9, 22)
    }
  ];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (expenseId) => {
    const filteredExpenses = expenses.filter(exp => exp.id !== expenseId)
    setExpenses(filteredExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} onRemoveExpense={removeExpenseHandler}/>
    </div>
  );
}

export default App;
