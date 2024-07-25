interface TechProps {
    className: string;
    label: string;
    image: string;
}
const Tech = ({className,label,image}:TechProps) => {
    return (
        <div className={className}>
            <p>{label} <img src={image} /> </p> 
        </div>
    );
};
export default Tech;