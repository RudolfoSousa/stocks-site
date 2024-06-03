import { forwardRef } from 'react';
import styles from './Input.module.css'

const Input = forwardRef(function Input(props, ref) {
    const { prefix, suffix } = props;
    return (
        <div className={styles.InputWrapper}>
            <label>
                {prefix && (
                    <div className={styles.Prefix}>{prefix}</div>
                )}
                <input className={styles.Input} {...props} ref={ref} />
                {suffix && (
                    <div className={styles.Suffix}>{suffix}</div>
                )}
            </label>
        </div>
    )
});

export default Input;