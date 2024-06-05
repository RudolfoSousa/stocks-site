import styles from './Button.module.css';

const Button = ({
    children,
    prefix,
    suffix,
    ...rest
}) => {
    return (
        <button {...rest} className={styles.Button}>
            {prefix && prefix}
            <span>
                {children}
            </span>
            {suffix && suffix}
        </button>
    )
}

export default Button;