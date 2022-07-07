import "./App.css";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
    <Box xs={{ width: { xl: "1488px" } }} m="auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
