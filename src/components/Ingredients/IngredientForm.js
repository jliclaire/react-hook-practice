import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo(props => {
  // method ONE
  // const inputState = useState({
  //   title: "",
  //   amount: ""
  // });

  //method TWO, array destructing
  // array destructing, here:
  // [{ title: string; amount: string; }, React.Dispatch<React.SetStateAction<{ title: string; amount: string; }]
  // inputState = inputState[0] (here is { title: string; amount: string; })
  // setInputState = inputState[1], the update data function (here is: React.Dispatch<React.SetStateAction<{ title: string; amount: string; })
  // const [inputState, setInputState] = useState({
  //   title: "",
  //   amount: ""
  // });

  //method THREE, manage states independently
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({
      title: enteredTitle,
      amount: enteredAmount
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              // method ONE
              // value={inputState[0].title}
              // onChange={event => {
              //   const newTitle = event.target.value;
              //   inputState[1](prevInputState => ({
              //     title: newTitle,
              //     amount: prevInputState.amount
              //   }));
              // }}

              //method TWO, array destructing
              // value={inputState.title}
              // onChange={event => {
              //   const newTitle = event.target.value;
              //   setInputState(prevInputState => ({
              //     title: newTitle,
              //     amount: prevInputState.amount
              //   }));
              // }}

              //method THREE, manage states independently
              value={enteredTitle}
              onChange={event => {
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              // method ONE
              // value={inputState[0].amount}
              // onChange={event => {
              //   const newAmount = event.target.value;
              //   inputState[1](prevInputState => ({
              //     amount: newAmount,
              //     title: prevInputState.title
              //   }));
              // }}

              //method TWO, array destructing
              // value={inputState.amount}
              // onChange={event => {
              //   const newAmount = event.target.value;
              //   setInputState(prevInputState => ({
              //     amount: newAmount,
              //     title: prevInputState.title
              //   }));
              // }}

              //method THREE, manage states independently
              value={enteredAmount}
              onChange={event => {
                setEnteredAmount(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
