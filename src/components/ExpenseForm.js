import React, { Component } from 'react';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            amount: '',
            date: new Date().toISOString().split('T')[0]
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            id: Date.now(),
            category: this.state.category,
            amount: parseFloat(this.state.amount),
            date: this.state.date
        };
        this.props.onAddExpense(newExpense);
        this.setState({
            category: '',
            amount: '',
            date: new Date().toISOString().split('T')[0]
        });
    };

    render() {
        const { monthlyBudget, totalExpenses } = this.props;
        const remainingBudget = monthlyBudget - totalExpenses;
        const budgetWarning = totalExpenses >= (monthlyBudget * 0.8);

        return (
            <div className="expense-form">
                <h2>Add New Expense</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Category:</label>
                        <input
                            type="text"
                            value={this.state.category}
                            onChange={(e) => this.setState({ category: e.target.value })}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Amount:</label>
                        <input
                            type="number"
                            value={this.state.amount}
                            onChange={(e) => this.setState({ amount: e.target.value })}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <input
                            type="date"
                            value={this.state.date}
                            onChange={(e) => this.setState({ date: e.target.value })}
                            required
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="submit-btn">Add Expense</button>
                </form>
                <div className="budget-info">
                    <p>Monthly Budget: ${monthlyBudget}</p>
                    <p>Remaining Budget: ${remainingBudget}</p>
                    {budgetWarning && (
                        <p className="warning">Warning: 80% of the budget has been utilized!</p>
                    )}
                </div>
            </div>
        );
    }
}
export default ExpenseForm;