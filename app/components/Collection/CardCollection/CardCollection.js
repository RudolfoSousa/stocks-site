'use client'

import Link from "next/link";
import { FaTrash } from "react-icons/fa6";
import Price from "../../Price";
import Card, { CardContent, CardFooter } from "../../shared/Card";
import styles from './CardCollection.module.css';
import { useCompare } from "../../shared/CompareProvider";
import Button from "../../shared/Button";

const types = {
    fund: "fundos-imobiliarios",
    stock: "acoes"
}

const CardCollection = ({ stock, name, close, change, type }) => {

    const { stocks, addStock, removeStock } = useCompare();

    const handleAdd = (e, stock) => {
        e.preventDefault();
        e.stopPropagation();
        addStock(stock)
    }

    const handleRemove = (e, stock) => {
        e.preventDefault();
        e.stopPropagation();
        removeStock(stock)
    }

    const isStockInStocks = (stock) => {
        return stocks.find((item) => item === stock);
    }

    return (
        <Card>
            <CardContent>
                <Link href={`/${types[type]}/${stock}`}>
                    <div className={styles.StockWrapper}>
                        <div className={styles.NameWrapper}>
                            <span className={styles.Stock}>
                                {stock}
                            </span>
                            <span className={styles.Name}>
                                {name}
                            </span>
                        </div>
                        <Price close={close} change={change} />
                    </div>
                </Link>
            </CardContent>
            <CardFooter>
                {
                    isStockInStocks(stock) ? (
                        <Button onClick={(e) => handleRemove(e, stock)} suffix={<FaTrash />}>Remover</Button>
                    ) : (
                        <Button onClick={(e) => handleAdd(e, stock)}>Comparar</Button>
                    )
                }
            </CardFooter>
        </Card>
    )
}

export default CardCollection;