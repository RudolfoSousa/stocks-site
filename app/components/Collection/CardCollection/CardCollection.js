import Link from "next/link";
import Price from "../../Price";
import Card, { CardContent, CardFooter } from "../../shared/Card";
import styles from './CardCollection.module.css';

const types = {
    fund: "fundos-imobiliarios",
    stock: "acoes"
}

const CardCollection = ({ stock, name, close, change, type }) => {
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
            </CardFooter>
        </Card>
    )
}

export default CardCollection;