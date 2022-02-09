// npm i react-image-viewer-dv

import { ImageViewer } from "react-image-viewer-dv";
import "./Gallery.css";
import Img1 from "../../assets/salon/carou1.png";
import Img2 from "../../assets/salon/carou2.png";
import Img3 from "../../assets/salon/carou3.png";
import Img4 from "../../assets/salon/carou4.png";
import Img5 from "../../assets/salon/cheveuxlisse2.jpg";
import Img6 from "../../assets/salon/bride.jpg";
import Img7 from "../../assets/salon/ciseaux.jpg";
import Img8 from "../../assets/salon/coupe.jpg";
import Img9 from "../../assets/salon/salon1.jpeg";
import Img10 from "../../assets/salon/hair.jpg";
import Img11 from "../../assets/salon/shape.png";
import Img12 from "../../assets/salon/carou4.png";
import Img13 from "../../assets/salon/carou4.png";
import Img14 from "../../assets/salon/carou4.png";

const Gallery = () => {
  return (
    <div className="gallery">
      <ImageViewer>
        <img src={Img1} alt="carrou1" />
        <img src={Img2} alt="carrou2" />
        <img src={Img3} alt="carrou3" />
        <img src={Img4} alt="carrou4" />
        <img src={Img5} alt="carrou4" />
        <img src={Img6} alt="carrou4" />
        <img src={Img7} alt="carrou4" />
        <img src={Img8} alt="carrou4" />
        <img src={Img9} alt="carrou4" />
        <img src={Img10} alt="carrou4" />
        <img src={Img11} alt="carrou4" />
        <img src={Img12} alt="carrou4" />
        <img src={Img13} alt="carrou4" />
        <img src={Img14} alt="carrou4" />
      </ImageViewer>
    </div>
  );
};

export default Gallery;


































// import React, {useState} from "react";
// import "./Gallery.css";
// import Img1 from "../../assets/salon/carou1.png";
// import Img2 from "../../assets/salon/carou2.png";
// import Img3 from "../../assets/salon/carou3.png";
// import Img4 from "../../assets/salon/carou4.png";



// const Gallery = () => {

//     let img =[
//         {
//             id: 1,
//             imgSrc: Img1,
//         },
//         {
//             id: 2,
//             imgSrc: Img2,
//         },
//         {
//             id: 3,
//             imgSrc: Img3,
//         },
//         {
//             id: 4,
//             imgSrc: Img4,
//         },
//     ]

//     const [model, setModel] = useState(false);
//     const [tempingSrc, setTempImgSrc] = useState("");

//     const getImg = (imgSrc) =>{
//         setTempImgSrc(imgSrc);
//         setModel(true);
//     }

//     return (
//       <>
//         <div className={model? "model open" : "model"}>
//             <img src={tempingSrc} />
//         </div>

//         <div className="gallery">
//           {img.map((item, index) => {
//             return (
//               <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
//                 <img src={item.imgSrc} style={{ width: "50%" }} />
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
// }

// export default Gallery;