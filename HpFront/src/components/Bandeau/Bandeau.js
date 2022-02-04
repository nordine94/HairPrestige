import "./Bandeau.css";



const Bandeau = ({image}) => {
    return ( 
        <div className="bandeau" style={{backgroundImage:`url(${image})` }}>
            <div className="left">
                <h1>Hair Prestige</h1>
                
                <h3>Votre salon de coiffure situé à 
                    Choisy le Roi <br/> vous accueille dans un cadre chaleureux <br/>et
                    convivial.</h3>
                <button>Reserver</button>
                {/* <div className="right"></div> */}
            </div>
               
        </div>
     );
}
 

export default Bandeau;