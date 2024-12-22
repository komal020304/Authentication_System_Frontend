import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./components/auth/LoginPage";
import { ProfilePage } from "./components/main/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/home" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
