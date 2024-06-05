import CardCollection from "../CardCollection/CardCollection";
import styles from './CardList.module.css';

const CardList = ({ stocks, type }) => {
    return (
        <ul className={styles.List}>
            {stocks.map(({ stock, name, close, change }) => {
                const cardProps = {
                    stock, name, close, change, type
                }

                return (
                    <li key={stock} className={styles.ListItem}>
                        <CardCollection {...cardProps} />
                    </li>
                )
            })}
        </ul>
    )
}

export default CardList;