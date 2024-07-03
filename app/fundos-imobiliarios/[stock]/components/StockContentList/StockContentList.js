import styles from '../../styles.module.css';

const StockContentList = ({ children }) => {
    return <ul className={styles.ContentWrapper}>{children}</ul>
}

export default StockContentList;