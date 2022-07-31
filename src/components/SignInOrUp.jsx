// Membutuhkan state untuk meng-track value dari TextField
import React, { useEffect, useState } from "react";

// Gunakan .module.css untuk mendapatkan scoped css
import styles from "./SignInOrUp.module.css";
import "./style.css";

import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import quote from "../images/login-cover1.jpg";
// firebase function call
import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

// Karena nantinya kita bisa berpindah ke halaman LoginPage (setelah Register)
// ataupun ke halaman HomePage (setelah Login), maka kita bisa memanfaatkan useNavigate
import { useNavigate } from "react-router-dom";
import { height } from "@mui/system";

const SignInOrUp = ({ loginOrRegister }) => {
  // gunakan hooks useNavigate
  const navigate = useNavigate();

  // user: auth.user jika ada yang login, null jika tidak ada
  // loading: boolean(indikator) nungguin login (bisa gunakan progress bar)
  // error
  const [user, loading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    // Karena state berupa Object
    // dan state sifatnya immutable

    // maka untuk set statenya
    // menggunakan spread dan overwrite
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    // console.log("Login");
    // navigate("/");
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    // console.log("Register");
    // navigate("/login");
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
    // dependencies
  }, [loading, user, navigate]);

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  return (
    <div className="left-right-login">
      <nav className="navigasi-login">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "75vh" }}
        >
          <Box sx={{ marginLeft: "100px", padding: "1em" }}>
            <img src={quote} alt="login" width="90%" height="auto"></img>
          </Box>
        </Grid>
      </nav>

      <section className="konten1-login">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "75vh" }}
        >
          <Box className={styles.boxy} component="form" noValidate>
            <Typography variant="body1">
              {loginOrRegister === "login" ? "Login Page" : "Register Page"}
            </Typography>

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              value={credential.email}
              onChange={textFieldEmailOnChangeHandler}
            />

            <TextField
              label="password"
              type="Password"
              variant="outlined"
              size="small"
              value={credential.password}
              onChange={textFieldPasswordOnChangeHandler}
            />

            <Button
              variant="outlined"
              size="small"
              onClick={buttonLoginOrRegisterOnClickHandler}
            >
              {loginOrRegister === "login" ? "Login" : "Register Account"}
            </Button>

            {loginOrRegister === "login" ? (
              <Link to="/register">
                <Typography variant="body1">
                  or do you want Register ?
                </Typography>
              </Link>
            ) : (
              <Link to="/login">
                <Typography variant="body1">or do you want Login ?</Typography>
              </Link>
            )}
          </Box>
        </Grid>
      </section>
    </div>
  );
};

export default SignInOrUp;
