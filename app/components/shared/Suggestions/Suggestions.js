import Link from 'next/link';
import Price from '../../Price';
import Loading from './Loading';
import styles from './Suggestions.module.css';

const Suggestions = ({ suggestions, loading }) => {

    if (loading) {
        return (
            <Loading />
        )
    }

    if (!suggestions) {
        return null;
    }

    return (
        <div className={styles.Suggestions}>
            {suggestions.funds.length > 0 && (
                <>
                    <h6 className={styles.Header}>Fundos Imobiliários</h6>
                    <ul>
                        {suggestions.funds.map(({ stock, name, close, change }) => {
                            return (
                                <li className={styles.ListItem} key={stock}>
                                    <Link className={styles.List} href={`/fundos-imobiliarios/${stock}`}>
                                        <div>
                                            <span className={styles.Stock}>{stock}</span>
                                            <span className={styles.Name}>{name}</span>
                                        </div>
                                        <Price close={close} change={change} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}

            {suggestions.stocks.length > 0 && (
                <>
                    <h6 className={styles.Header}>Ações</h6>
                    <ul>
                        {suggestions.stocks.map(({ stock, name, close, change }) => {
                            return (
                                <li className={styles.ListItem} key={stock}>
                                    <Link className={styles.List} href={`/acoes/${stock}`}>
                                        <div>
                                            <span className={styles.Stock}>{stock}</span>
                                            <span className={styles.Name}>{name}</span>
                                        </div>
                                        <Price close={close} change={change} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}

            {suggestions.bdrs.length > 0 && (
                <>
                    <h6 className={styles.Header}>BDRs</h6>
                    <ul>
                        {suggestions.bdrs.map(({ stock, name, close, change }) => {
                            return (
                                <li className={styles.ListItem} key={stock}>
                                    <Link className={styles.List} href={`/bdrs/${stock}`}>
                                        <div>
                                            <span className={styles.Stock}>{stock}</span>
                                            <span className={styles.Name}>{name}</span>
                                        </div>
                                        <Price close={close} change={change} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}
        </div>
    )
}

export default Suggestions;