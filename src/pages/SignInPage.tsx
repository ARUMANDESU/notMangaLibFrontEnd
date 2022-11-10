import { LockOutlined } from "@mui/icons-material";
import {
   Avatar,
   Box,
   Button,
   Checkbox,
   Container,
   createTheme,
   CssBaseline,
   FormControlLabel,
   Grid,
   Paper,
   TextField,
   ThemeProvider,
   Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStores } from "../context/StoreContext";

const theme = createTheme({ palette: { mode: "dark" } });

export const SignInPage = () => {
   const rootStore = useStores();
   const userStore = rootStore.UserStore;

   const navigate = useNavigate();

   const handleLogin = (
      email: FormDataEntryValue | null,
      password: FormDataEntryValue | null
   ) => {
      axios
         .post(
            "http://localhost:5000/signin",
            {
               email: email,
               password: password,
            },
            { withCredentials: true }
         )
         .then((res) => {
            userStore.setUser(
               res.data.user.id,
               res.data.user.name,
               res.data.user.email,
               res.data.user.imgUrl,
               res.data.user.role
            );
            navigate("/");
         })
         .catch((e) => console.error(e));
   };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      handleLogin(data.get("email"), data.get("password"));
   };

   return (
      <ThemeProvider theme={theme}>
         <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
               item
               xs={false}
               sm={4}
               md={7}
               sx={{
                  backgroundImage:
                     "url(https://images2.alphacoders.com/111/111290.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                     t.palette.mode === "light"
                        ? t.palette.grey[50]
                        : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
               }}
            />
            <Grid
               item
               xs={12}
               sm={8}
               md={5}
               component={Paper}
               elevation={6}
               square
            >
               <Box
                  sx={{
                     mt: 32,
                     mx: 4,
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                  }}
               >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                     <LockOutlined />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                     Sign in
                  </Typography>
                  <Box
                     component="form"
                     noValidate
                     onSubmit={handleSubmit}
                     sx={{ mt: 1 }}
                  >
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                     />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                     />
                     <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                     />
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                     >
                        Sign In
                     </Button>
                     <Grid container>
                        <Grid item>
                           {"Don't have an account? "}
                           <Link to="/signup" className="link">
                              {"Sign Up"}
                           </Link>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </ThemeProvider>
   );
};
