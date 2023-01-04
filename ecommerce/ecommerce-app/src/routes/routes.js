import HomePage from "../pages/homepage";
import LoginPage from "../pages/loginpage";
import RegisterPage from "../pages/registerpage";
import ProtectedPage from "./protected";
import AddProduct from  "../component/addproduct"

 const routes = [
    {
        path : "/",
        element :(
            <ProtectedPage needLogin={true}>
                <HomePage/>
            </ProtectedPage>    
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
        element : <RegisterPage/>
    },
    {
        path : "/*",
        element : <RegisterPage/>
    },
    {
        path: "/addproduct",
        element: <AddProduct />,
    }


]

export default routes;