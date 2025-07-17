import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Preview = () => {
    const { preview }=useParams();
    return (
        <div>
            <Link to="/create">
                <button type="button">Return</button>
            </Link>
            <p>Placeholder</p>
                <button type="button">Save Card</button>
        </div>
    )
}
export default Preview