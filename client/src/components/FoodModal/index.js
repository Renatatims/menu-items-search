import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function FoodModal(props) {
  const { open, handleClose} = props;
  console.log(props);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bgcolor: "white",
          boxShadow: 20,
          borderRadius: 4,
          p: 2,
          m: 1,
          minWidth: "450px",
          minHeight: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton aria-label="close" onClick={props.handleClose} sx={{position:"absolute", top:10, right:10}}>
          <CloseIcon />
        </IconButton>
        <Stack>
          <Typography>{props.title}</Typography>
          <img src="https://via.placeholder.com/150" alt="foodImage"></img>
        </Stack>
      </Box>
    </Modal>
  );
}

export default FoodModal;
