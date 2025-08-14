import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import User from "./pages/User.jsx";
import About from "./pages/About.jsx";
import Layout from "./componets/Layout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserDetails from "./pages/UserDetails.jsx";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
          <Route index element={<App />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="user" element={<User />} />
          <Route path="about" element={<About />} />
          <Route path="userDetails/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
);
