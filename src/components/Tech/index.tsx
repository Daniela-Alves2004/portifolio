import style from "./Tech.module.scss";

interface TechProps {
    className: string;
    label: string;
    image: string;
}
const Tech = ({className,label,image}:TechProps) => {
    return (
        <div className={style.classNameTech}>
            <img className={style.logoTech} src={image} />
            <p>{label} </p> 
        </div>
    );
};
export default Tech;