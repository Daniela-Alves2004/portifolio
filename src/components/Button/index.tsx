import style from './Button.module.scss';

interface ButtonProps {
    btLink: string;
    className ?: string;
    label: string;
    image: string;
    btclassName ?: string;
    onClick : () => void;
}

const Button = ({ btLink, className,btclassName, image, label,onClick }: ButtonProps) => {
    return (
        <a className={style[className || '']} href={btLink} onClick={btLink === "#" ? (e) => { e.preventDefault(); onClick(); } : undefined}>
            <button className={style[btclassName || '']}>
                <img src={image} alt={label} />
                <p>{label}</p>
            </button>
        </a>
    );
}

export default Button;
