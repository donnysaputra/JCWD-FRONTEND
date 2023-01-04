import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import HomePage from './pages/homepage';
import routes from "./routes/routes.js"
import {Routes,Route, json} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import userReducer from './redux/auth/auth';
import user_types from './redux/auth/types';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

    const savedUserData = localStorage.getItem("user_data")
    if(savedUserData){
    const parseUserData = JSON.parse(savedUserData)
      dispatch({
        type: user_types.USER_LOGIN,
        payload: parseUserData
      })
    }
    

  return (
    <Routes key={"route"}>
      {routes.map((val,idx) =>{
        return(
          <Route exact path={val.path} element={val.element} key={idx}></Route>
        )
      })

      }
    </Routes>
  );
}

export default App;
