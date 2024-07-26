import Tec from "../Tech";
import React from "../../assets/technologic/react.png";
import TypeScript from "../../assets/technologic/typeScript.png";
import Sass from "../../assets/technologic/scss.png";


const TechPA = () => {
    return(
        <>
       
        <Tec
            className="React"    
            label="React"
            image={React}
            />
            <Tec 
            className="TypeScript"
            label="TypeScript"
            image={TypeScript}
            />
            <Tec
            className="sass"
            label="sass"
            image={Sass}
            />
      </>

    )
}
export default TechPA;