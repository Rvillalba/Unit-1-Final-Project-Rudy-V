import { useParams } from "react-router-dom";
import CardPreview from "./CardPreview";
import Button from "./Button";
import eventHandler from "./eventHandler";

const CardCreate = () => {
    const { create }=useParams();
    const {formData, handleChange, clearInput} = eventHandler();
    const emptyFields = Object.values(formData).every(value => value.trim() === "");
    return(       
        <div>
            <div id="create-form">
                <h1 id="create-title">Enter Information Below</h1>            
                    <form id="form">
                        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /> <br/>
                        <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" /> <br/>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-Mail" /> <br/>
                        <input id="address1" type="text" name="address1" value={formData.address1} onChange={handleChange} placeholder="Address Line 1" /> <br/>
                        <input id="address2" type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Address Line 2" /> <br/>
                        <Button id="btn" label="Clear All Fields" onClick={clearInput} />
                    </form>
                <CardPreview data={formData} isDisabled={emptyFields}/>  
            </div>
            <div>
            </div>
        </div>
    )
}

export default CardCreate