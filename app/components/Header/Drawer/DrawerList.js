import style from './Drawer.module.css';

const DrawerList = (props) => {
    const {children} = props;
    return (
        <ul className={style.List}>
            {children}
        </ul>
    )
}

export default DrawerList;