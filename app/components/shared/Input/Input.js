import { forwardRef } from 'react';
import style from './Input.module.css'

const Input = forwardRef((props, ref) => {
    const { prefix, suffix } = props;
    return (
        <div className={style.InputWrapper}>
            <label>
                {prefix && (
                    <div className={style.Prefix}>{prefix}</div>
                )}
                <input className={style.Input} {...props} ref={ref} />
                {suffix && (
                    <div className={style.Suffix}>{suffix}</div>
                )}
            </label>
        </div>
    )
});

export default Input;