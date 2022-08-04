import React from "react";
import { auth, firestore } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { Grid, Box, Typography, Divider, Button } from "@mui/material";
import quote from "../images/login-cover2.jpg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const UserProfile = () => {
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [gender, setGender] = React.useState(1);
  const [kota, setKota] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState(0);
  const [usia, setUsia] = React.useState(0);
  const [user] = useAuthState(auth);
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const textFieldFirstOnChangeHandler = (event) => {
    setFirst(event.target.value);
  };

  const textFieldLastOnChangeHandler = (event) => {
    setLast(event.target.value);
  };

  const textFieldGenderOnChangeHandler = (event) => {
    setGender(event.target.value);
  };

  const textFieldEmailOnChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const textFieldKotaOnChangeHandler = (event) => {
    setKota(event.target.value);
  };

  const textFieldPhoneOnChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const textFieldUsiaOnChangeHandler = (event) => {
    setUsia(event.target.value);
  };

  const addUser = (event) => {
    event.preventDefault();
    const user_profile1 = doc(firestore, "user_profile/" + user.email);
    const data = {
      email: user.email,
      firstname: first,
      lastname: last,
      gender: gender,
      kota: kota,
      phone: phone,
      usia: usia,
    };
    setDoc(user_profile1, data);
    setMessage("Data akun Berhasil diperbarui");
    setOpen(true);
  };

  React.useEffect(() => {
    const queryForProfile = async () => {
      const profileQuery = query(
        collection(firestore, "user_profile"),
        where("email", "==", user.email)
      );

      const querySnapshot = await getDocs(profileQuery);
      querySnapshot.forEach((profile) => {
        setFirst(profile.data().firstname);
        setLast(profile.data().lastname);
        setGender(profile.data().gender);
        setKota(profile.data().kota);
        setPhone(profile.data().phone);
        setUsia(profile.data().usia);
      });
    };
    queryForProfile();
  }, []);

  const handleClose = () => {
    setOpen(false);
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
            <img src={quote} alt="login" width="70%" height="auto"></img>
          </Box>
        </Grid>
      </nav>

      <section className="konten1-login">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          style={{ minHeight: "75vh" }}
        >
          <form onSubmit={addUser}>
            <Typography className="category-title">Edit Akun</Typography>
            <Divider />
            <div style={{ marginBottom: "1em", marginTop: "0.5em" }}>
              <Typography>First Name:</Typography>
              <input
                type="text"
                name="firstname"
                maxLength="20"
                width="40"
                placeholder="First name"
                onChange={textFieldFirstOnChangeHandler}
                value={first}
              />
            </div>
            <div style={{ marginBottom: "1em" }}>
              <Typography>Last Name:</Typography>
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                onChange={textFieldLastOnChangeHandler}
                value={last}
              />
            </div>
            <div style={{ marginBottom: "1em" }}>
              <Typography>Gender:</Typography>
              <select
                id="gender"
                name="gender"
                onChange={textFieldGenderOnChangeHandler}
                value={gender}
              >
                <option value="1">Pria</option>
                <option value="0">Wanita</option>
              </select>
            </div>
            <div style={{ marginBottom: "1em" }}>
              <Typography>Kota:</Typography>
              <input
                type="text"
                name="kota"
                placeholder="Nama Kota"
                onChange={textFieldKotaOnChangeHandler}
                value={kota}
              />
            </div>
            <div style={{ marginBottom: "1em" }}>
              <Typography>No. Telepon:</Typography>
              <input
                type="number"
                name="phone"
                placeholder="No. Telepon"
                onChange={textFieldPhoneOnChangeHandler}
                value={phone}
              />
            </div>
            <div style={{ marginBottom: "1em" }}>
              <Typography>Usia:</Typography>
              <input
                type="number"
                name="usia"
                placeholder="usia"
                onChange={textFieldUsiaOnChangeHandler}
                value={usia}
              />
            </div>
            <div style={{ marginBottom: "1em" }}>
              <Typography>Email:</Typography>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={textFieldEmailOnChangeHandler}
                value={user.email}
                readOnly
              />
            </div>
            <div>
              <button type="submit">Save</button>
            </div>
          </form>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"User Account Information"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Tutup
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </section>
    </div>
  );
};
export default UserProfile;
