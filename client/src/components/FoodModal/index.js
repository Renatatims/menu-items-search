import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

function FoodModal(props) {
  const { open, handleClose } = props;
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >  
     <Typography>Food Title</Typography>
    </Modal>
  );
}

export default FoodModal;