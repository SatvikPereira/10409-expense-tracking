import React, { Component } from 'react';

class ExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortField: 'date',
            sortDirection: 'desc'
        };
    }

    handleSort = (field) => {
        this.setState(prevState => ({
            sortField: field,
            sortDirection: prevState.sortField === field 
                ? (prevState.sortDirection === 'asc' ? 'desc' : 'asc')
                : 'asc'
        }));
    };

    getSortedExpenses = () => {
        const { expenses } = this.props;
        const { sortField, sortDirection } = this.state;

        return [...expenses].sort((a, b) => {
            if (sortField === 'amount') {
                return sortDirection === 'asc' ? a.amount - b.amount : b.amount - a.amount;
            }
            if (sortField === 'date') {
                return sortDirection === 'asc' 
                    ? new Date(a.date) - new Date(b.date)
                    : new Date(b.date) - new Date(a.date);
            }
            return sortDirection === 'asc'
                ? a[sortField].localeCompare(b[sortField])
                : b[sortField].localeCompare(a[sortField]);
        });
    };

    render() {
        const sortedExpenses = this.getSortedExpenses();

        return (
            <div className="expense-list">
                <h2>Expense List</h2>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => this.handleSort('category')}>Category</th>
                            <th onClick={() => this.handleSort('amount')}>Amount</th>
                            <th onClick={() => this.handleSort('date')}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedExpenses.map(expense => (
                            <tr key={expense.id}>
                                <td>{expense.category}</td>
                                <td>${expense.amount}</td>
                                <td>{expense.date}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2">Total Expenses:</td>
                            <td>${this.props.totalExpenses}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
export default ExpenseList;