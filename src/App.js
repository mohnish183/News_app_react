import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/business"
            element={<News country="in" category="business" />}
          />
          <Route
            path="/entertainment"
            element={<News country="in" category="entertainment" />}
          />
          <Route
            path="/general"
            element={<News country="in" category="general" />}
          />
          <Route
            path="/health"
            element={<News country="in" category="health" />}
          />
          <Route
            path="/science"
            element={<News country="in" category="science" />}
          />
          <Route
            path="/sports"
            element={<News country="in" category="sports" />}
          />
          <Route
            path="/technology"
            element={<News country="in" category="technology" />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
