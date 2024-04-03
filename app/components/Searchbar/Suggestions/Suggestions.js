'use client'

import styles from './Suggestions.module.css'

const Suggestions = ({ suggestions, loading }) => {

    if (loading) {
        return (
            <div className={styles.Suggestions}>
                <p>Loading</p>
            </div>
        );
    }

    if (!suggestions) {
        return null;
    }


    return (
        <div className={styles.Suggestions}>
            {console.log(suggestions)}
            {suggestions.funds.length > 0 && (
                <>
                    <h6 className={styles.Header}>Fundos Imobiliários</h6>
                    <ul>
                        {suggestions.funds.map(({ stock, name, close }) => {
                            return (
                                <li className={styles.List} key={stock}>
                                    <div>
                                        <span className={styles.Stock}>{stock}</span>
                                        <span className={styles.Name}>{name}</span>
                                    </div>
                                    <span className={styles.Close}>R$ {close}</span>
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
                        {suggestions.stocks.map(({ stock, name, close }) => {
                            return (
                                <li className={styles.List} key={stock}>
                                    <div>
                                        <span className={styles.Stock}>{stock}</span>
                                        <span className={styles.Name}>{name}</span>
                                    </div>
                                    <span className={styles.Close}>R$ {close}</span>
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
                        {suggestions.bdrs.map(({ stock, name, close }) => {
                            return (
                                <li className={styles.List} key={stock}>
                                    <div>
                                        <span className={styles.Stock}>{stock}</span>
                                        <span className={styles.Name}>{name}</span>
                                    </div>
                                    <span className={styles.Close}>R$ {close}</span>
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