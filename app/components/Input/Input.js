import { forwardRef } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from './Input.module.css'

const Input = forwardRef((props, ref) => {
    const { onButtonClick } = props;
    return (
        <div className={styles.InputWrapper}>
            <input className={styles.Input} {...props} ref={ref} />
            <div className={styles.Icon}>
                <button onClick={onButtonClick}>
                    <FaMagnifyingGlass />
                </button>
            </div>
        </div>
    )
});

export default Input;