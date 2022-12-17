import React from 'react';
import './ExpenseItems.css';

function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__date">{props.date.toLocaleString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
