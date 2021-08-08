import React, { useState } from 'react';

import './ExpensesList.css';

import ExpenseItem from '../ExpenseItem/ExpenseItem'

const ExpensesList = (props) => {

  const deleteExpenseItemHandler = (expenseId) => {
    props.onDeleteExpense(expenseId);
  };


  if (props.expenses.length === 0) {
    return (<h2 className='expenses-list__fallback'>Found no expenses.</h2>);
  }

  return ( 
  	<ul className='expenses-list'>
  		{props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        onDelete={deleteExpenseItemHandler}>
      </ExpenseItem>
    	))}
  	</ul>
  	);
};

export default ExpensesList;