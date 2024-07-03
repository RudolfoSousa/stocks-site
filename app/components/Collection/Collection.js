import styles from './Collection.module.css';
import { getStocks } from "@/app/actions";
import Link from "next/link";
import CardList from './CardList/CardList';

export default async function Collection(props) {
    const { type = "fund", limit = 10, sector, heading } = props;
    const data = await getStocks({ type, limit, sector });
    const { stocks } = data;

    const types = {
        fund: "fundos-imobiliarios",
        stock: "acoes"
    }

    return (
        <>
            <div className={styles.HeaderWrapper}>
                {heading && (
                    <h1 className={styles.Heading}>{heading}</h1>
                )}
                <Link className={styles.Link} href={`/${types[type]}`}>Ver tudo</Link>
            </div>
            <div className={styles.Wrapper}>
                <CardList stocks={stocks} type={type} />
            </div>
        </>
    );
};