import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientsList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientsHandler = ingredient => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients,
      { id: Math.floor(Math.random() * 1000).toString(), ...ingredient } // ...ingredient take all the current data of the ingredient object
    ]);
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
