import { useParams } from "react-router-dom";

const Preview = () => {
    const { preview }=useParams();
    return (
        <div>
            <p>Placeholder</p>
        </div>
    )
}
export default Preview