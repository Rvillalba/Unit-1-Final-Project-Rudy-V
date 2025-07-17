import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const CardCreate = () => {
    const { create }=useParams();
    return(
        <div >
            <form>
                <input id="name" type="text" name="name" placeholder="Name" /><br/>
                <input id="phone" type="text" name="phone" placeholder="Phone Number" /><br/>

                <input id="email" type="text" name="email" placeholder="E-Mail"/><br/>
                <input id="address1" type="text" name="address1" placeholder="Address Line 1"/><br/>
                <input id="address2" type="text" name="address2" placeholder="Address Line 2"/><br/>
                <Link to="/preview">
                    <button type="button">View</button>
                </Link>
            </form>
        </div>
    )
}

export default CardCreate