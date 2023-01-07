import HomePage from "../pages/homepage";
import LoginPage from "../pages/loginpage";
import RegisterPage from "../pages/registerpage";
import ProtectedPage from "./protected";
import AddProduct from  "../component/addproduct"
import ErrorPage from "../component/errorpage";

 const routes = [
    {
        path : "/",
        element :(
                <HomePage/>
                ) 
    },
    {
        path : "/login",
        element : (
                <ProtectedPage guestOnly={true}>
                    <LoginPage/>
                </ProtectedPage>
                )
       
    },
    {
        path : "/register",
        element : (
            <ProtectedPage guestOnly={true}>
                <RegisterPage/>
            </ProtectedPage>
            )
    },
    {
        path : "/*",
        element : <ErrorPage/>
    },
    {
        path: "/addproduct",
        element: (
                <ProtectedPage needLogin={true}>
                <AddProduct />
                </ProtectedPage>)

    }


]

export default routes;