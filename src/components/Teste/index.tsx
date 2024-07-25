import Tec from "../Tech";

interface testeProps {
    teste: string;
    teste1: string;
}
const Teste = ({teste,teste1}:testeProps) => {
    return(
        <>
        <div className={teste1} >
        <Tec
            className="html"    
            label="html"
            image="src\assets\technologic\html.png"
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
        </div>
        <div className={teste}>
        <Tec
            className="html"    
            label="html"
            image="src\assets\technologic\html.png"
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
        </div>

        </>
    )
}
export default Teste;