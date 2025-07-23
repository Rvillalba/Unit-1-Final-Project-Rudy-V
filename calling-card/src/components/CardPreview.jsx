import { toPng } from 'html-to-image'
import { useRef } from "react";
import { useParams } from "react-router-dom";
import Button from './Button';
import backgroundImage from '../images/bg-image.jpg'


const CardPreview = ({ data }) => {
    const { preview }=useParams();
    const elementRef = useRef(null);
    const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "calling-card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return(
        <div>

<div className="business-card"
                ref={elementRef}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    width: "325px",
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
                <p>{data.name}</p>
                <p>{data.phone}</p>
                <p>{data.email}</p>
                <p>{data.address1}</p>
                <p>{data.address2}</p><br/>
                
            </div>
            <Button label="Download Card" onClick={htmlToImageConvert} />
        </div>
    )
}
export default CardPreview