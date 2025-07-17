import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Register = () => {
    const { register }=useParams();
    return (
        <div>
            <form>
                <input id="fname" type="text" name="fname" placeholder="First Name" /><br/>
                <input id="lname" type="text" name="lname" placeholder="Last Name" /><br/>
                <input id="email" type="text" name="email" placeholder="E-Mail"/><br/>
                <input id="password" type="password" name="password" placeholder="Password"/><br/>
                <Link to="/create">
                    <button type="button">Register Account</button>
                </Link>
            </form>
        </div>
    )
}
export default Register