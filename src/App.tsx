import { useState } from 'react'

import './App.css'

import ExpenseList from './ExpenseTracker/ExpenseList';
import Expensefilter from './ExpenseTracker/Expensefilter';
import ExpenseForm from './ExpenseTracker/ExpenseForm';





function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Car Insurance', amount: 294.67, category: 'Insurance' },
    { id: 2, description: 'Rent', amount: 1200, category: 'Bills' },
    { id: 3, description: 'Phone', amount: 45, category: 'Bills' },
    { id: 4, description: 'Internet', amount: 60, category: 'Bills' },
    { id: 5, description: 'Gas', amount: 30, category: 'Car' },
    { id: 6, description: 'Food', amount: 150, category: 'Groceries' }
  ])

  const visbleExpenses =selectedCategory ? expenses.filter((e)=> e.category === selectedCategory) : expenses

  return (
    <>
    <ExpenseForm />
    <div className="mb-3 mt-3">
      <Expensefilter onSelectCategory={(category)=> setSelectedCategory(category)} />
    </div>
      <ExpenseList  expenses={  visbleExpenses } 
      onDelete={(id)=> setExpenses(expenses.filter((e)=> e.id  !=id ))} />
      
    </>
  )
}

export default App
