import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { useEffect } from "react"


function ProtectedPage ({
    children,
    needLogin = false,
    guestOnly = false,
}){
    let navigate = useNavigate()
    const userSelector = useSelector((state) => state.auth)

    useEffect(()=>{
        
        if(needLogin && !userSelector.id){
            return navigate("/login", {replace : true})
        }

        if(guestOnly && userSelector.id){
            return navigate("/",{replace :true})
        }
    },[])

    return children;

}

export default ProtectedPage;