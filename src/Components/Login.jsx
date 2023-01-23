import { Link } from "react-router-dom"

function Login ({loginData, setLoginData}){
    return (
        <>
        <h1>Login</h1>
        <Link to={"/"}>go home</Link>
        </>
    )
}

export default Login