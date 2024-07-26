interface TechProps {
    className: string;
    label: string;
    image: string;
}
const Tech = ({className,label,image}:TechProps) => {
    return (
        <div className={className}>
            <img className='logo' src={image} />
            <p>{label} </p> 
        </div>
    );
};
export default Tech;