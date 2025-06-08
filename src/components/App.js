import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}
