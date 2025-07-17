import { useParams } from "react-router-dom";
const CardCreate = () => {
    const { create }=useParams();
    return(
        <div >
            <div id="navbar">
                <a href="#create-new">Create New</a>
                <a href="#view-saved">View Saved</a>          
            </div>

            <form>
                <input id="name" type="text" name="name" placeholder="Enter Name" /><br/>
                <input id="email" type="text" name="email" placeholder="Enter E-Mail"/><br/>
                <input id="address" type="text" name="address" placeholder="Enter Address"/><br/>

                <button type="button">View</button>
 
            </form>
        </div>
    )
}

export default CardCreate