// npm i react-image-viewer-dv

import { ImagerDisplay, ImagerImg } from '../utils/imager/index';
import "./Gallery.css";
import img1 from "../../assets/salon/carou1.png";
import img2 from "../../assets/salon/carou2.png";
import img3 from "../../assets/salon/carou3.png";
import img4 from "../../assets/salon/carou4.png";
import img5 from "../../assets/salon/cheveuxlisse2.jpg";
import img6 from "../../assets/salon/bride.jpg";
import img7 from "../../assets/salon/ciseaux.jpg";
import img8 from "../../assets/salon/coupe.jpg";
import img9 from "../../assets/salon/salon1.jpeg";
import img10 from "../../assets/salon/hair.jpg";
import img11 from "../../assets/salon/shape.png";
import img12 from "../../assets/salon/carou4.png";
import img13 from "../../assets/salon/carou4.png";
import img14 from "../../assets/salon/carou4.png";

const Gallery = () => {
  const imgs = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14, img11
  ];

  return (
    <div className="gallery">
      <ImagerDisplay z-index="2000" />
      {
        imgs.map((img) => (
          <ImagerImg width="400px" src={img} alt="on verra" />
        ))
      }
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