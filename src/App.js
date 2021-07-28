import Expenses from  './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [
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
  ]

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
