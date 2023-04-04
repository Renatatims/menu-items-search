import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

function LoginModal(props) {
  const { open, handleClose } = props;

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

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
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
        {data ? (
          <p className="dark:text-white">Success!</p>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <Stack>
              <Typography> Login </Typography>
              <TextField
                id="email"
                label="email"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                fullWidth
                autoFocus
                sx={{ margin: 2 }}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                name="password"
                value={formState.password}
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
                Login
              </Button>
            </Stack>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </Box>
    </Modal>
  );
}

export default LoginModal;
