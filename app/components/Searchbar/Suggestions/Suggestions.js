import Price from '../../Price';
import Loading from './Loading';
import style from './Suggestions.module.css'

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
        <div className={style.Suggestions}>
            {suggestions.funds.length > 0 && (
                <>
                    <h6 className={style.Header}>Fundos Imobiliários</h6>
                    <ul>
                        {suggestions.funds.map(({ stock, name, close, change }) => {
                            return (
                                <li className={style.List} key={stock}>
                                    <div>
                                        <span className={style.Stock}>{stock}</span>
                                        <span className={style.Name}>{name}</span>
                                    </div>
                                    <Price close={close} change={change} />
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}

            {suggestions.stocks.length > 0 && (
                <>
                    <h6 className={style.Header}>Ações</h6>
                    <ul>
                        {suggestions.stocks.map(({ stock, name, close, change }) => {
                            return (
                                <li className={style.List} key={stock}>
                                    <div>
                                        <span className={style.Stock}>{stock}</span>
                                        <span className={style.Name}>{name}</span>
                                    </div>
                                    <Price close={close} change={change} />
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}

            {suggestions.bdrs.length > 0 && (
                <>
                    <h6 className={style.Header}>BDRs</h6>
                    <ul>
                        {suggestions.bdrs.map(({ stock, name, close, change }) => {
                            return (
                                <li className={style.List} key={stock}>
                                    <div>
                                        <span className={style.Stock}>{stock}</span>
                                        <span className={style.Name}>{name}</span>
                                    </div>
                                    <Price close={close} change={change} />
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