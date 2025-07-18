import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CardCreate = () => {
    const { create }=useParams();
    const [formData, setFormData] = useState({
        name:"",
        phone:"",
        email:"",
        address1:"",
        address2:"",
    });
    const handleChange = (e) => {
        const { name, value} = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return(
        <div>
            <h1>Card Fields</h1>            
                <form>
                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /> <br/>
                <input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" /> <br/>
                <input id="email" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="E-Mail" /> <br/>
                <input id="address1" type="text" name="address1" value={formData.address1} onChange={handleChange} placeholder="Address Line 1" /> <br/>
                <input id="address2" type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Address Line 2" /> <br/>
                <Link to="/preview">
                    <button type="button">View</button>
                </Link>
                </form>
            <h2>Preview</h2>
            <p>Name: {formData.name}</p>
            <p>Phone: {formData.phone}</p>
            <p>E-mail: {formData.email}</p>
            <p>Address Line 1: {formData.address1}</p>
            <p>Address Line 2: {formData.address2}</p>
        </div>
    )
}

export default CardCreate