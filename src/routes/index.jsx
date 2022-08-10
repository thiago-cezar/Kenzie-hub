import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dasboar from "../pages/Dasboard";

export default function routesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dasboard" element={<Dasboar />} />

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
