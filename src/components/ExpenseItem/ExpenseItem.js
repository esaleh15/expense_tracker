import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

	const deleteExpenseItemHandler = () => {
		const expenseId = props.id;
		props.onDelete(expenseId);
	};


	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date}></ExpenseDate>
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>£{props.amount}</div>
				</div>
				<div className='expense-item__actions'>
					<Button type='button' onClick={deleteExpenseItemHandler}>Delete</Button>
				</div>
			</Card>
		</li>
		)
}

export default ExpenseItem;