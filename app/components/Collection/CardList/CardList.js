'use client'

import { useCompare } from "../../shared/CompareProvider";
import CardCollection from "../CardCollection/CardCollection";
import styles from './CardList.module.css';

const CardList = ({ stocks, type }) => {
    const { addStock } = useCompare();
    return (
        <ul className={styles.List}>
            {stocks.map(({ stock, name, close, change }) => {
                const cardProps = {
                    stock, name, close, change, type, action: addStock
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