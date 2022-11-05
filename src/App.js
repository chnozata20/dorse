import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SelectCargo from "./pages/SelectCargo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/selectcargo' element={<SelectCargo />} />

      </Routes>
    </BrowserRouter>
  );
}
