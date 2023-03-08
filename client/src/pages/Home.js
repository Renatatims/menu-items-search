import React, { useState } from "react";

//API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

const SearchFood = () => {
  // create state for holding returned Spoonacular api data
  const [searchedFoods, setSearchedFoods] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // create method to search for food and set state on form submit - 
  // Include API call
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      //Spoonacular API - menu items
      const response = await fetch(
        `https://api.spoonacular.com/food/menuItems/search?query=${searchInput}&addMenuItemInformation=true&apiKey=${API_KEY}`
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { menuItems } = await response.json();

      const foodData = menuItems.map((food) => ({
        foodId: food.id,
        title: food.title,
        description: food.nutrition.protein,
        image: food.image,
      }));

      console.log(menuItems);

      setSearchedFoods(foodData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input onChange={(e) => setSearchInput(e.target.value)}></input>
        <button type="submit">SUBMIT</button>
      </form>
      <div>
        {searchedFoods.map((food) => {
          return (
            <div key={food.foodId}>
              <p>{food.title}</p>
              <p>{food.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SearchFood;
