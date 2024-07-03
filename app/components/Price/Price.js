import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import classNames from "classnames";
import styles from './Price.module.css';

const Price = (props) => {
    const { close, change, size } = props;
    const changeNegative = change < 0;

    const changeClassnames = classNames(styles.Change, {
        [styles.Negative]: changeNegative,
        [styles.Positive]: !changeNegative
    })

    const wrapperClassnames = classNames(styles.Wrapper, {
        [styles[size]]: size
    })

    return (
        <div className={wrapperClassnames}>
            {close && (
                <span className={styles.Close}>
                    R$ {close.toFixed(2)}
                </span>
            )}
            {Boolean(change) && (
                <span className={changeClassnames}>
                    {!changeNegative ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                    {change.toFixed(2)}%
                </span>
            )}
        </div>
    )
}

export default Price;