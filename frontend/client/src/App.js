import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import HomePage from "Containers/HomePage";
import DashboardPage from "Containers/DashboardPage";
import LoginPage from "Containers/LoginPage";
import RegisterPage from "Containers/RegisterPage";

import { store } from 'store';
import 'App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;