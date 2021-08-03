import React, { useState } from 'react';

import Card from '../Card/Card';
import ExpenseFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import './Expenses.css'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

	return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}></ExpenseFilter>
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
		)
}

export default Expenses;