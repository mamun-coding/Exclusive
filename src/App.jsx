 
 import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
 const App = () => {
   return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Login/>} />
      <Route path="/" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
   )
 }
 
 export default App
 