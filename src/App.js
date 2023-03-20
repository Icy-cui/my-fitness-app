import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }}>
      <Navbar />
      {/* BrowserRouter set in index.js */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetail />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
