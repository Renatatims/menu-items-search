import React, { useState } from "react";

//Material UI imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
      <Grid container spacing={3}>
        {searchedFoods.map((food) => (
          <Grid item xs={12} sm={6} md={4} key={food.foodId}>
            <Card sx={{ width: 345, height:345, boxShadow: 8 }}>
              <CardMedia
                component="img"
                image={food.image}
                alt={food.title}
                sx={{ width: 345, height:200}}
              />
              <CardContent>
                <Typography variant="h5">{food.title}</Typography>
                <Typography variant="body2">
                  Protein: {food.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default SearchFood;
