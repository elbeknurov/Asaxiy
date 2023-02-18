import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Single from "./components/single/single";
import Main from "./components/main/main";
import Page from "./components/notFound/404page";
import Login from "./components/log/login";
import Pay from "./components/pay/pay";
import Delivery from "./components/delivery/delivery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="*" element={<Page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
);
