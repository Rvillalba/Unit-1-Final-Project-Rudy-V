import { toPng } from 'html-to-image'
import { useRef } from "react";
import { useParams } from "react-router-dom";
import backgroundImage from '../images/bg-image.jpg'


const CardPreview = (props) => {
    return(
        <div>

<div className="business-card"
                ref={elementRef}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    width: "350px",
                    height: "auto",
                    backgroundColor: "#fff",
                    padding: "30px",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                    margin: "40px auto",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    textAlign: "left",
                    marginBottom: "20px",
                    color: "#333",
                }}>
                <p>{props.name}</p>
                <p>{props.phone}</p>
                <p>{props.email}</p>
                <p>{props.address1}</p>
                <p>{props.address2}</p><br/>
                
            </div>
            <button onClick={htmlToImageConvert}>Download Card</button>
        </div>
    )
}
export default CardPreview