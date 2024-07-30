import style from './Button.module.scss';

interface ButtonProps {
    btLink: string;
    className ?: string;
    label: string;
    image: string;
    btclassName ?: string;
}

const Button = ({ btLink, className,btclassName, image, label }: ButtonProps) => {
    return (
        <a className={style[className || '']} href={btLink}>
            <button className={style[btclassName || '']}>
                <img src={image} alt={label} />
                <p>{label}</p>
            </button>
        </a>
    );
}

export default Button;
