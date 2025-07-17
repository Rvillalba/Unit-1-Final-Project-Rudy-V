import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CardCreate = () => {
    const { create }=useParams();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");

    return(
        <div >
            <h1>Card Fields</h1>            
                <form>
                <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" /><br/>
                <input id="phone" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number" /><br/>
                <input id="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-Mail"/><br/>
                <input id="address1" type="text" value={address1} onChange={(e)=>setAddress1(e.target.value)} placeholder="Address Line 1"/><br/>
                <input id="address2" type="text" value={address2} onChange={(e)=>setAddress2(e.target.value)} placeholder="Address Line 2"/><br/>
                <Link to="/preview">
                    <button type="button">View</button>
                </Link>
                </form>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>E-mail: {email}</p>
            <p>Address Line 1: {address1}</p>
            <p>Address Line 2: {address2}</p>
        </div>
    )
}

export default CardCreate