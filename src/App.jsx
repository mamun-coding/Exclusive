 
 import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./layout/MainLayout";
 const App = () => {
   return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route  index={true} element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
   )
 }
 
 export default App
 