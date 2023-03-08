import React, { useState } from "react";

const SearchFood = () => {
  // create state for holding returned Spoonacular api data
  const [searchedFoods, setSearchedFoods] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // create method to search for food and set state on form submit - 
  // Include API call
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //{searchInput} in the API call
    setSearchedFoods();
    setSearchInput("");

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
