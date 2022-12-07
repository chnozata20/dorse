import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SelectCargo from "./pages/SelectCargo";
import EmployerHome from "./pages/EmployerHome";
import AddCargo from "./pages/AddCargo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/selectcargo' element={<SelectCargo />} />
        <Route path='/employerhome' element={<EmployerHome />} />
        <Route path='/addcargo' element={<AddCargo />} />
      </Routes>
    </BrowserRouter>
  );
}
