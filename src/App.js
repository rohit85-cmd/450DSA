import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import DrawerMenu from "./components/Drawer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Box from "@mui/material/Box";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login loginState={loggedIn} setLoggedIn={setLoggedIn} />}
          ></Route>

          <Route
            exact
            path="/home"
            element={
              <Box>
                <DrawerMenu loginState={loggedIn} setLoggedIn={setLoggedIn} />
              </Box>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login loginState={loggedIn} setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
