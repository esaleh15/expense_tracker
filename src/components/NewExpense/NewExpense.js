import React, { useState } from 'react';
import './NewExpense.css'
import Button from '../Button/Button';

import ExpenseForm from '../ExpenseForm/ExpenseForm'

const NewExpense = (props) => {

	const [showForm, setShowForm] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
		setShowForm(false);
	};


	const showFormHandler = () => {
		setShowForm(true);
	}

	const stopFormEditHandler = () => {
		setShowForm(false);
	}

	return (
		<div className='new-expense'>
			{!showForm && (
				<Button
					onClick={showFormHandler}>Add New Expense
				</Button>
				)
			}
			{showForm && (
				<ExpenseForm
				onSaveExpenseData={saveExpenseDataHandler}
				onCancel={stopFormEditHandler}></ExpenseForm>
				)
			}
		</div>
	)
};

export default NewExpense;