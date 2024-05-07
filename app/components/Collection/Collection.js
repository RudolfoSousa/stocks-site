import Container from "../shared/Container";
import style from './Collection.module.css';
import { getStocks } from "@/app/actions";
import Link from "next/link";
import Price from "../Price";

export default async function Collection(props) {
    const { type = "fund", limit = 10, heading } = props;
    const data = await getStocks({ type, limit });
    const { stocks } = data;

    const types = {
        fund: "fundos-imobiliarios",
        stock: "acoes"
    }

    return (
        <Container>
            <div className={style.HeaderWrapper}>
                {heading && (
                    <h1 className={style.Heading}>{heading}</h1>
                )}
                <Link className={style.Link} href={`/${types[type]}`}>Ver tudo</Link>
            </div>
            <div className={style.Wrapper}>
                <ul className={style.List}>
                    {
                        stocks.map(({ stock, name, close, change }) => {
                            const changeNegative = change < 0
                            return (
                                <li key={stock} className={style.ListItem}>
                                    <Link href={`/${types[type]}/${stock}`}>
                                        <div className={style.StockWrapper}>
                                            <div className={style.NameWrapper}>
                                                <span className={style.Stock}>
                                                    {stock}
                                                </span>
                                                <span className={style.Name}>
                                                    {name}
                                                </span>
                                            </div>
                                            <Price close={close} change={change} />
                                        </div>
                                    </Link>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
        </Container>
    );
};