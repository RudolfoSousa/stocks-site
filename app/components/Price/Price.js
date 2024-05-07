import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import classNames from "classnames";
import style from './Price.module.css';

const Price = (props) => {
    const { close, change, size } = props;
    const changeNegative = change < 0;

    const changeClassnames = classNames(style.Change, {
        [style.Negative]: changeNegative,
        [style.Positive]: !changeNegative
    })

    const wrapperClassnames = classNames(style.Wrapper, {
        [style[size]]: size
    })

    return (
        <div className={wrapperClassnames}>
            {close && (
                <span className={style.Close}>
                    R$ {close.toFixed(2)}
                </span>
            )}
            {change && change !== 0 && (
                <span className={changeClassnames}>
                    {!changeNegative ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                    {change.toFixed(2)}%
                </span>
            )}
        </div>
    )
}

export default Price;