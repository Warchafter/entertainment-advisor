import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "Containers/HomePage";
import DashboardPage from "Containers/DashboardPage";
import LoginPage from "Containers/LoginPage";
import RegisterPage from "Containers/RegisterPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;