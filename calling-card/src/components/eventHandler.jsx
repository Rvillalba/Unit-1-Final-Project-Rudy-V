import { useState } from "react";

const eventHandler = () => {
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
        return {formData, handleChange, clearInput}
}

export default eventHandler