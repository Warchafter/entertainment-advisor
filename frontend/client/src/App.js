import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { checkAuth } from "features/user";

import HomePage from "Containers/HomePage";
import DashboardPage from "Containers/DashboardPage";
import LoginPage from "Containers/LoginPage";
import RegisterPage from "Containers/RegisterPage";
import ThemePicker from "Components/ThemePicker";

import 'App.css';
import { useDispatch } from "react-redux";
import { themeList } from "shared/themeList";
import ProfilePage from "Containers/ProfilePage";


const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  useEffect(() => {
    if (user !== null) {
      themeList.map((value, index) => {
        if (value.themeId === user.theme_picked) {
          var i;
          for(i in value.cssAttributes) {
            document.documentElement.style.setProperty(value.cssAttributes[i].name, value.cssAttributes[i].value);
          }
        }
        return <></>
      })
    } else {
      themeList.map((value, index) => {
        if (value.themeId === 1) {
          var i;
          for(i in value.cssAttributes) {
            document.documentElement.style.setProperty(value.cssAttributes[i].name, value.cssAttributes[i].value);
          }
        }
        return <></>
      })
    }
  }, [user]);

  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/themepicker' element={<ThemePicker />} />
        </Routes>
      </Router>
  );
}

export default App;