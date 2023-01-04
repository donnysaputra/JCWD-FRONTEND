import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import user_types from "./redux/auth/types";
function App() {
  const dispatch = useDispatch();
  const savedDataUser = localStorage.getItem("user_data");
  if (savedDataUser) {
    const parseDataUser = JSON.parse(savedDataUser);

    dispatch({
      type: user_types.USER_LOGIN,
      payload: parseDataUser,
    });
  }
  return (
    <>
      <Routes key={"route"}>
        {routes.map((val, key) => {
          return (
            <Route exact path={val.path} element={val.element} key={key} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
