import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const CardCreate = () => {
    const { create }=useParams();
    return(
        <div >
            <form>
                <input id="name" type="text" name="name" placeholder="Enter Name" /><br/>
                <input id="email" type="text" name="email" placeholder="Enter E-Mail"/><br/>
                <input id="address" type="text" name="address" placeholder="Enter Address"/><br/>
                <Link to="/preview">
                    <button type="button">View</button>
                </Link>
            </form>
        </div>
    )
}

export default CardCreate