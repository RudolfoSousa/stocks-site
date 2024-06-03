import styles from './Drawer.module.css'

const DrawerItem = (props) => {
    const { children } = props;

    return (
        <li className={styles.Item}>
            {children}
        </li>
    )
}

export default DrawerItem;