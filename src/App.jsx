import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import Basket from "./Pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
