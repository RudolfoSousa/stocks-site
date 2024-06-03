import styles from './Drawer.module.css';

const DrawerList = (props) => {
    const {children} = props;
    return (
        <ul className={styles.List}>
            {children}
        </ul>
    )
}

export default DrawerList;