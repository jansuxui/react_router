import React from "react"
import { useNavigate } from "react-router-dom"
function Login()
{

    const navigate = useNavigate();

    function onSubmit()
    {
        navigate('/dashboard')
    }


    return(


<div className="container">
        <h1 className="text-center">Login Page</h1>

   

  <button onClick={onSubmit} className="text-center">Login</button>

</div>


       

    )
}
export default Login;