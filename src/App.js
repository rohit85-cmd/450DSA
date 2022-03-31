import "./App.css";

import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import DrawerMenu from "./components/Drawer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Checkbox from "@mui/material/Checkbox";

const getCheckboxStatus = () => {
  let list = localStorage.getItem("checkbox");
  console.log(list);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [user, setLoginUser] = useState({});
  // const [checkbox, setCheckBox] = useState(
  //   JSON.parse(localStorage.getItem("checkbox")) || false
  // );
  // const handleChange = () => {
  //   setCheckBox(!checkbox);
  //   localStorage.setItem("checkbox", JSON.stringify(!checkbox));
  // };
  return (
    <>
      <Box>
        <DrawerMenu />
      </Box>

      {/* <Checkbox
        color="success"
        id="check1"
        checked={checkbox}
        onChange={handleChange}
      /> */}

      {/* <Router>
        <Routes>
          <Route exact path="/">
            {
              user && user._id ? <DrawerMenu /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
