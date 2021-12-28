import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import App_todo from "../src/todo/App_todo";
import App_expense from "../src/expense_demo/App_expense"

function App() {
  return (
    <div id="nav_wrapper">
      <NavLink to="/">Home Page</NavLink>     
      <NavLink to="/about">About Page</NavLink>     
      <NavLink to="/login">login</NavLink>    
      <NavLink to="/todo">To Do</NavLink>      
      <NavLink to="/expense_demo">Expense</NavLink>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
        <Route path="/todo" element={<App_todo />}></Route>
        <Route path="/expense_demo" element={<App_expense />}></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is Home page of Website</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is About page of Website</p>
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <h1>404 Page</h1>
      <p>This page not found</p>
    </div>
  );
}

export default App;
