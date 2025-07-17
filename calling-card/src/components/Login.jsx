const Login = () => {
    return (
        <div>
            <form id="login">
                <label for="email">E-Mail</label><br/>
                <input id="email" type="email" name="E-Mail"/><br/>
                <label for="password">Password</label><br/>
                <input id="password" type="password" name="Password"/><br/>
                <button type="button">Login</button>
            </form>
        </div>
    );
}

export default Login