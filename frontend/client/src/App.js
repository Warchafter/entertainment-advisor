import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { checkAuth } from "features/user";

import HomePage from "Containers/HomePage";
import DashboardPage from "Containers/DashboardPage";
import LoginPage from "Containers/LoginPage";
import RegisterPage from "Containers/RegisterPage";
import ThemePicker from "Components/ThemePicker";
import AnimeTest from "Containers/AnimeTest";

import 'App.css';
import { useDispatch } from "react-redux";
import { themeList } from "shared/themeList";
import ProfilePage from "Containers/ProfilePage";
import LandingPage from "Containers/LandingPage";


const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  const getAllCookies = () => {
    console.log('Raw document.cookie:', document.cookie);
  
    const allCookies = document.cookie
      .split(';')
      .map(cookie => cookie.trim())
      .reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        return {
          ...acc,
          [name]: decodeURIComponent(value),
        };
      }, {});
  
    // Use allCookies object that contains all the cookies
    console.log('All cookies:', allCookies);
  
    // Your further logic with the cookies
  }

  useEffect(() => {
    if (user !== null) {
      getAllCookies()
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

      const theme_cookie = getAllCookies('theme_picked');
      console.log('Theme picked:', theme_cookie);
      if (theme_cookie) {
        themeList.map((value, index) => {
          if (value.themeId === theme_cookie) {
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
          <Route path='/anime-test' element={<AnimeTest />} />
          <Route path='/landing-page' element={<LandingPage />} />
        </Routes>
      </Router>
  );
}

export default App;