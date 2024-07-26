import Tec from "../Tech";
import html from "../../assets/technologic/html.png"

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
            image="src\assets\technologic\css.png"
            />
            <Tec
            className="js"
            label="js"
            image="src\assets\technologic\js.png"
            />
      </>

    )
}
export default TechMD;