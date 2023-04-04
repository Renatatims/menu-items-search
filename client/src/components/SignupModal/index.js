import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

function SignupModal(props) {
  const { open, handleClose } = props;

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
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
          <IconButton
            aria-label="close"
            onClick={props.handleClose}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {data ? (
            <p>
              Success!
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <Stack>
                <Typography sx={{ textAlign: "center" }}> Signup </Typography>
                <TextField
                  value={formState.firstName}
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  onChange={handleChange}
                  type="text"
                  required
                  fullWidth
                  autoFocus
                  sx={{ margin: 2 }}
                />
                <TextField
                  value={formState.lastName}
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  type="text"
                  onChange={handleChange}
                  required
                  fullWidth
                  autoFocus
                  sx={{ margin: 2 }}
                />
                <TextField
                  value={formState.email}
                  name="email"
                  id="email"
                  label="email"
                  type="email"
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{ margin: 2 }}
                />
                <TextField
                  value={formState.password}
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{ margin: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ margin: 2 }}
                >
                  Create Account
                </Button>
              </Stack>
            </form>
          )}
        </Box>
      </Modal>

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
}

export default SignupModal;
