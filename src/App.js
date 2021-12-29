import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import App_todo from "../src/todo/App_todo";
import App_expense from "../src/expense_demo/App_expense";
import App_axios from "../src/axios/App_axios";

function App() {
  return (
    <div id="nav_wrapper">
      <NavLink activeClassName="active" to="/">Home Page</NavLink>     
      <NavLink to="/axios">Axios</NavLink>     
      <NavLink to="/reminder_app">Reminder App</NavLink>    
      <NavLink to="/todo">To Do</NavLink>      
      <NavLink to="/expense_demo">Expense Item</NavLink>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/axios" element={<App_axios />}></Route>
        {/* <Route path="/reminder_app" element={<App_reminder/>}></Route> */}
        <Route path="/todo" element={<App_todo />}></Route>
        <Route path="/expense_demo" element={<App_expense />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
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
      <h1 style={{color:'red'}}>404 Page</h1>
      <h1>This page not found</h1>
    </div>
  );
}

export default App;
