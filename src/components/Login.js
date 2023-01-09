import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { Container } from "react-bootstrap";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = async e => {
        e.preventDefault()
        login();
    };

    return <Container className="mt-5">
        <h1> Please Login</h1>
        <form onSubmit={handleLogin}>
            <p>Password</p>
            <input type="password" />
            <div>
                <button type="submit">
                    Login
                </button>
            </div>
        </form>
    </Container>
}



export default Login;