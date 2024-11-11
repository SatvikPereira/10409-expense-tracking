import React, { Component } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
            monthlyBudget: 1000
        };
    }

    handleAddExpense = (expense) => {
        this.setState(prevState => ({
            expenses: [...prevState.expenses, expense]
        }));
    };

    calculateTotalExpenses = () => {
        return this.state.expenses.reduce((total, expense) => total + expense.amount, 0);
    };

    render() {
        const totalExpenses = this.calculateTotalExpenses();

        return (
            <div className="app">
                <h1>Expense Tracker</h1>
                <ExpenseForm
                    onAddExpense={this.handleAddExpense}
                    monthlyBudget={this.state.monthlyBudget}
                    totalExpenses={totalExpenses}
                />
                <ExpenseList
                    expenses={this.state.expenses}
                    totalExpenses={totalExpenses}
                />
            </div>
        );
    }
}

export default App;