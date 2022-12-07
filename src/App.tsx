import React from "react";

import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              {/* <Route path="/" element={<div>Hello</div>} /> */}
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </main>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;
