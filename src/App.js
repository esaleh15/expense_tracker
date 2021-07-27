import ExpenseItem from './components/ExpenseItem';

function App() {

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
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
