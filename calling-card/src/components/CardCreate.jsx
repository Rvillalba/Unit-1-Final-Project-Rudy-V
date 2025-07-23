import { toPng } from 'html-to-image'
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CardPreview from './CardPreview';

const CardCreate = () => {
    const elementRef = useRef(null);
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
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const clearInput = () => {
        setFormData({
        name:"",
        phone:"",
        email:"",
        address1:"",
        address2:"",
        });
    };
    const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return(
        
        <div>
            <div class="create-form">
                <h1 className="create-title">Enter Information Below</h1>            
                    <form>
                        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /> <br/>
                        <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" /> <br/>
                        <input id="email" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="E-Mail" /> <br/>
                        <input id="address1" type="text" name="address1" value={formData.address1} onChange={handleChange} placeholder="Address Line 1" /> <br/>
                        <input id="address2" type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Address Line 2" /> <br/>
                    <button type="button" onClick={clearInput}>Clear All Fields</button>
                    </form>
                    
            </div>
            <div>
                {<CardPreview />}
            </div>
            <button onClick={htmlToImageConvert}>Download Card</button>
        </div>
    )
}

export default CardCreate