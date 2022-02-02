import React, {useState} from "react";
import "./Gallery.css";
import Img1 from "../../Images/carou1.png";
import Img2 from "../../Images/carou2.png";
import Img3 from "../../Images/carou3.png";
import Img4 from "../../Images/carou4.png";



const Gallery = () => {

    let img =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempingSrc, setTempImgSrc] = useState("");

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
      <>
        <div className={model? "model open" : "model"}>
            <img src={tempingSrc} />
        </div>

        <div className="gallery">
          {img.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{ width: "50%" }} />
              </div>
            );
          })}
        </div>
      </>
    );
}

export default Gallery;