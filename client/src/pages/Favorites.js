import React from "react";

//Material UI imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Favorites = () => {
return (
    <>
      <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            align="center"
          >
            <Card
              sx={{ width: 345, height: 380, boxShadow: 8, m: 5 }}
            >
              <CardMedia
                component="img"
                image='https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                sx={{ width: 345, height: 200 }}
              />
              <CardContent sx={{ cursor: "pointer" }}>
                <Typography variant="h6">Food Title</Typography>
                <Typography variant="body1">Restaurant</Typography>
                <Typography variant="body3">
                  Calories: , Carbs:, Fat: , Protein: 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
    </>
  );
};
export default Favorites;
