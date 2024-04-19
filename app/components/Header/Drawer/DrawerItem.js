import style from './Drawer.module.css'

const DrawerItem = (props) => {
    const { children } = props;

    return (
        <li className={style.Item}>
            {children}
        </li>
    )
}

export default DrawerItem;