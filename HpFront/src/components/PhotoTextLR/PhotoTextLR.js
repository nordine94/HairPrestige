import './PhotoTextLR.css';

const PhotoTextLR = ({ props }) => {
    return (
        <div className="phototextlr">
            <img className="photo" src={props.image} alt={props.alt} />
            <div class="text">
                <div class="paragraphe">
                    La société C.F.R - <b>Centre de Formation et Recrutement</b> a été créée en <b> 2016</b> et
                    détient l’autorisation préfectorale pour exercer dans le milieu de la formation
                    professionnelle.
                </div>
                {/* <p class="par1"> CFR est <b> un centre de
                    formation pluridisciplinaire </b> qui a pour mission de former l’ensemble des profils
                    désirant se former à l’un de nos domaines d’expertise.
                </p>
                <p class="par1">
                    Nous nous adressons autant aux demandeurs d’emploi qu’aux entreprises souhaitant former
                    leur personnel ou tout autre personne souhaitant se former. CFR s’appuie sur une solide
                    expérience
                    dans les métiers de l’informatique et de la finance.
                </p> */}
            </div>
        </div>
    );
}

export default PhotoTextLR;