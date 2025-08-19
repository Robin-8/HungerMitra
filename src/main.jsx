import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Layout from "./componets/Layout";
import FoodCategory from "./pages/FoodCategory";
import FoodList from "./pages/FoodList";
import FoodDetails from "./pages/FoodDetails";
import Cart from './pages/Cart'
import { Provider } from "react-redux";
import { store } from "./store/store";




const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="foodCategory/:category" element={<FoodCategory/>}/>
          <Route path="signup" element={<SignUp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart/>}/>
          <Route path="productList" element={<FoodList/>}/>
          <Route path="foodDetails/:foodId" element={<FoodDetails/>}/>
        </Route>
      </Routes>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter> 
);
