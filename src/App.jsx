import { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Container from "react-bootstrap/esm/Container";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

import LandingPage from "./pages/Landing";
import LoginPage from "./pages/Login";

import AppNavbar from "./components/AppNavbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser();
  }, []);

  async function getCurrentUser() {
    try {
      setIsLoading(true);
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${API_URL}/users/current-user`);
      setCurrentUser(res.data.user);
      setIsLoading(false);
    } catch (error) {
      console.log("Something went wrong when getting current user", error);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <BrowserRouter>
      <AppNavbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              currentUser ? (
                <LandingPage currentUser={currentUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={<LoginPage setCurrentUser={setCurrentUser} />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
