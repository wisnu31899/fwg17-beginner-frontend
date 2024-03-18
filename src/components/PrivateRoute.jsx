import React from "react"
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

const PrivateRoute = ({children}) =>{
    // const [token, setToken] = React.useState(window.localStorage.getItem('token'))
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()
    
    React.useEffect(()=>{
        if(!token){
            navigate('/login')
        }
    }, [token,navigate])

    return (
        <>{children}</>
    )

    // if(token){
    //     return (
    //         <>{children}</>
    //     )
    // }else{
    //     return(
    //         <Navigate to={'/login'} />
    //     )
    // }
}
export default PrivateRoute