import { Route, Routes } from "react-router-dom";
import Layout from "./basic/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favorite from "./pages/Favorite";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;