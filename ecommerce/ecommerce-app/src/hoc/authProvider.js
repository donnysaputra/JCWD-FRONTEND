import { useEffect } from "react"
import { useDispatch } from "react-redux"
import user_types from "../redux/auth/types"



const AuthProvider = ({children}) => {
    const dispatch = useDispatch()

    const fetchData =() =>{
        const savedUserData = localStorage.getItem("user_data")
        console.log(savedUserData)
        if(savedUserData){
        const parseUserData = JSON.parse(savedUserData)
          dispatch({
            type: user_types.USER_LOGIN,
            payload: parseUserData
          })
        }
    }
    
    useEffect(()=>{
        fetchData()
    },[])

    return children;
}

export default AuthProvider;
