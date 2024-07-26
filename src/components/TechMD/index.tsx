import Tec from "../Tech";
import html from "../../assets/technologic/html.png";
import css from "../../assets/technologic/css.png";
import js from "../../assets/technologic/js.png";
const TechMD = () => {
    return(
        <>
       
        <Tec
            className="html"    
            label="html"
            image={html}
            />
            <Tec 
            className="css"
            label="css"
            image={css}
            />
            <Tec
            className="js"
            label="js"
            image={js}
            />
      </>

    )
}
export default TechMD;