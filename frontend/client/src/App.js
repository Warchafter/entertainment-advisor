import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { checkAuth } from "features/user";

import HomePage from "Containers/HomePage";
import DashboardPage from "Containers/DashboardPage";
import LoginPage from "Containers/LoginPage";
import RegisterPage from "Containers/RegisterPage";
import ThemePicker from "Components/ThemePicker";

import 'App.css';
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/themepicker' element={<ThemePicker />} />
        </Routes>
      </Router>
  );
}

export default App;