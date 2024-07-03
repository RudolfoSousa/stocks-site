import Price from "@/app/components/Price";
import styles from '../../styles.module.css';

const StockContentItem = ({ text, priceProps }) => {
    return (
        <li className={styles.ContentItem}>
            <span className={styles.ContentCardTitle}>
                {text}
            </span>
            <Price
                {...priceProps}
            />
        </li>
    )
}

export default StockContentItem;