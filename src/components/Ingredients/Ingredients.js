import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientsList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    fetch("https://react-hook-db869.firebaseio.com/ingredients.json")
      .then(response => response.json())
      .then(responseData => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          });
        }
        setUserIngredients(loadedIngredients); // will enter into an infinite loop without the [] as a second argument for useEffect()
      });
  }, []);
  // [] is the dependencies of this method, only when the dependencies has changed, useEffect() will run
  // dependencies mean variables that definded outside the useEffect() func
  // [] empty array as a second argument is like componentDidMount()

  // useEffect(() => {
  //   console.log("RENDERING INGREDIENTS");
  // }, [userIngredients]); // will render twice as userIngredients as a dependency has changed when setUserIngredients changed

  const addIngredientsHandler = ingredient => {
    // add ingredient without DB
    // setUserIngredients(prevIngredients => [
    //   ...prevIngredients,
    //   { id: Math.floor(Math.random() * 1000).toString(), ...ingredient } // ...ingredient take all the current data of the ingredient object
    // ]);

    // add ingredient using firebase DB
    fetch("https://react-hook-db869.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(responseData => {
        setUserIngredients(prevIngredients => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient }
        ]);
      });
  };

  const removeIngredientHandler = ingredientId => {
    // setUserIngredients(() =>
    //   userIngredients.filter(ingredient => ingredient.id !== ingredientId)
    // );
    setUserIngredients(prevIngredients =>
      prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientsList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
