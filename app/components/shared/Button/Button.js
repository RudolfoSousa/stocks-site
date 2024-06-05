import classnames from 'classnames';
import styles from './Button.module.css';

const Button = ({
    children,
    prefix,
    suffix,
    variant,
    ...rest
}) => {

    const classNames = classnames(styles.Button, {
        [styles.Round]: variant === 'round'
    })

    return (
        <button {...rest} className={classNames}>
            {prefix && prefix}
            <span>
                {children}
            </span>
            {suffix && suffix}
        </button>
    )
}

export default Button;