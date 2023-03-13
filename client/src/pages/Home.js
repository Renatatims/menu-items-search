import React, { useState } from "react";

import FoodModal from "../components/FoodModal/index";

//Material UI imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

const SearchFood = () => {
  //Modal - useState
  const [modalShow, setModalShow] = useState(false);
  //Foods - useState
  const [food, setFood] = useState({});

  //Open Modal
  const handleOpenModal = (title) => {
    setFood(title);
    setModalShow(true);
  };

  console.log(handleOpenModal);

  //Close Modal
  const handleCloseModal = () => {
    setModalShow(false);
  };
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
        `https://api.spoonacular.com/food/menuItems/search?query=${searchInput}&addMenuItemInformation=true&apiKey=${API_KEY}&number=1`
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { menuItems } = await response.json();

      const foodData = menuItems.map((food) => ({
        foodId: food.id,
        title: food.title,
        restaurant: food.restaurantChain,
        calories: food.nutrition.calories,
        carbs: food.nutrition.carbs,
        fat: food.nutrition.fat,
        protein: food.nutrition.protein,
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
      {/* Testing Modal
      <button onClick={() => handleOpenModal()}>Testing Modal</button>
      <FoodModal open={modalShow} handleClose={handleCloseModal}  />*/}
      <Grid container spacing={3}>
        {searchedFoods.map((food) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            key={food.foodId}
            align="center"
          >
            <Card
              sx={{ width: 345, height: 380, boxShadow: 8, m: 5 }}
              onClick={() => handleOpenModal(`${food.title}`)}
            >
              <CardMedia
                component="img"
                image={food.image}
                alt={food.title}
                sx={{ width: 345, height: 200 }}
              />
              <CardContent sx={{ cursor: "pointer" }}>
                <Typography variant="h6">{food.title}</Typography>
                <Typography variant="body1">{food.restaurant}</Typography>
                <Typography variant="body3">
                  Calories: {food.calories}, Carbs: {food.carbs}, Fat:{" "}
                  {food.fat}, Protein: {food.protein}
                </Typography>
              </CardContent>
            </Card>
            <FoodModal
              open={modalShow}
              handleClose={handleCloseModal}
              title={food.title}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default SearchFood;
