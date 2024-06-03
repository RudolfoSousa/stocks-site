'use client'
import { useState } from 'react';
import Container from '../shared/Container';
import BurgerButton from './BurgerButton';
import Drawer from '../shared/Drawer'
import DrawerItem from '../shared/Drawer/DrawerItem';
import DrawerList from '../shared/Drawer/DrawerList';
import { FaHouse } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname()
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    const navigationItems = [
        {
            label: 'Home',
            href: '/',
            icon: <FaHouse />
        },
        {
            label: 'Fundos Imobiliários',
            href: '/fundos-imobiliarios',
            icon: <FaBuilding />
        },
        {
            label: 'Ações',
            href: '/acoes',
            icon: <FaArrowTrendUp />
        }
    ]

    return (
        <header>
            <div className={styles.Header}>
                <Container>
                    <div className={styles.Wrapper}>
                        <BurgerButton onClick={(e) => handleClick(e)} />
                    </div>
                </Container>
            </div>
            <Drawer onclose={() => setOpen(false)} open={open}>
                <DrawerList>
                    {navigationItems.map(({ label, href, icon }) => {
                        return (
                            <DrawerItem key={label}>
                                <Link onClick={() => setOpen(false)} href={href} className={`${styles.Item} ${pathname === href && styles.Active}`}>
                                    <span>{icon}</span>
                                    {label}
                                </Link>
                            </DrawerItem>
                        )
                    })}
                </DrawerList>
            </Drawer>
        </header>
    )
}

export default Header;