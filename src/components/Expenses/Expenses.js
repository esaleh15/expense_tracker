import React, { useState } from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';
import ExpenseFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };


	return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}></ExpenseFilter>
        {props.expenses.map((expense) =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}>
          </ExpenseItem>
        )}
      </Card>
    </div>
		)
}

export default Expenses;