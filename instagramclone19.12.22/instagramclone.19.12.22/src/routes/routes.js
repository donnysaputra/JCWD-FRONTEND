import Navbar from "../components/navbar";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import ErrorPage from "../pages/error";
import ProtectedPage from "./protected";
import RegisterPage from "../pages/registerpage"


const routes = [
  {
    path: "/",
    element: (
        <ProtectedPage needLogin={true}>
      <HomePage />
        </ProtectedPage>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
  {
    path: "/addproduct",
    element: <ErrorPage />,
  },
 
];

export default routes;
