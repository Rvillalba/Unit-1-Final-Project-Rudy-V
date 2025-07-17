import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div>
            <form id="login">
                <label for="email">E-Mail</label><br/>
                <input id="email" type="email" name="E-Mail"/><br/>
                <label for="password">Password</label><br/>
                <input id="password" type="password" name="password"/><br/>
                <Link to="/create">
                    <button type="button">Login</button>
                </Link>
            </form>
        </div>
    );
}

export default Login