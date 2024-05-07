import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from './routes/routes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <>
              <ProtectedRoutes />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
