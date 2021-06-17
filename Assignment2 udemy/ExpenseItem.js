import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  const filterSelect = (year) => {
    console.log("year selected");
    console.log(year);
  };
  return (
    <div>
      <div>
        <ExpensesFilter onFilter={filterSelect} />
      </div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </div>
  );
};

export default ExpenseItem;
