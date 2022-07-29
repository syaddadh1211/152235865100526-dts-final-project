import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/NavBar";
import ProtectedComponent from "./components/ProtectedComponent";
import DetailBook from "./pages/DetailBook";
import SearchResult from "./pages/SearchResult";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <App />
            </ProtectedComponent>
          }
        />
        {/* <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="played"
          element={
            <ProtectedComponent>
              <MoviePlayed />
            </ProtectedComponent>
          }
        />*/}
        <Route
          path="selected/:bookSlug"
          element={
            // <ProtectedComponent>
            <DetailBook />
            // </ProtectedComponent>
          }
        />
        <Route
          path="search/:keyword"
          element={
            // <ProtectedComponent>
            <SearchResult />
            // </ProtectedComponent>
          }
        />
        <Route path="*" element={<h1>Halaman tidak ditemukan</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
