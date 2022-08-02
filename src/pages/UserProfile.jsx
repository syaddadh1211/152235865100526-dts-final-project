import React from "react";
import { auth, firestore, doc } from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { setDoc } from "firebase/firestore";

const UserProfile = () => {
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");

  const textFieldFirstOnChangeHandler = (event) => {
    setFirst(event.target.value);
  };

  const textFieldLastOnChangeHandler = (event) => {
    setLast(event.target.value);
  };

  const textFieldEmailOnChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const addUser = (event) => {
    event.preventDefault();
    const user_profile1 = doc(firestore, "user_profile/" + email);
    const data = {
      email: email,
      firstname: first,
      gender: true,
      kota: "Surabaya",
      lastname: last,
      phone: parseInt("08123"),
      usia: parseInt("19"),
    };
    setDoc(user_profile1, data);
    // console.log(`${first}${last}${email}`);
    // try {
    //   console.log("ehre");
    //   const docRef = await addDoc(collection(db, "user_profile"), {
    //     email: email,
    //     firstname: first,
    //     gender: true,
    //     kota: "Surabaya",
    //     lastname: last,
    //     kota: "Surabaya",
    //     phone: parseInt("08123"),
    //     usia: parseInt("19"),
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  };

  return (
    <form onSubmit={addUser}>
      <input
        type="text"
        name="firstname"
        placeholder="First name"
        onChange={textFieldFirstOnChangeHandler}
        value={first}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last name"
        onChange={textFieldLastOnChangeHandler}
        value={last}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={textFieldEmailOnChangeHandler}
        value={email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default UserProfile;
