import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from './components/profile';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Home />} />
    </Routes> */}
    <Register/>
  </>
  );
}

export default App;
