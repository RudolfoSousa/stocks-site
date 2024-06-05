'use client'

import { useCompare } from "../CompareProvider";
import { FaCoins } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import styles from './Comparator.module.css'
import Drawer from "../Drawer";
import { useState } from "react";
import Container from "../Container";
import Button from "../Button";

const Comparator = () => {
    const { stocks, removeStock } = useCompare();
    const [open, setOpen] = useState(false);
    const handleClick = (stock) => {
        if (stocks.length <= 1) {
            setOpen(false);
        }
        if (removeStock) {
            removeStock(stock)
        }
    }
    return (
        <div>
            {stocks.length > 0 && (
                <>
                    <div className={styles.FloatingContainer}>
                        <Button variant="round" onClick={() => setOpen(true)}>
                            <FaCoins />
                        </Button>
                    </div>

                    <Drawer onclose={() => setOpen(false)} open={open} down>
                        <Container>
                            <h2>Comparador</h2>
                            {
                                stocks.map((stock) => {
                                    return (
                                        <>
                                            <span>{stock}</span>
                                            <Button onClick={() => handleClick(stock)}>
                                                <FaTrash />
                                            </Button>
                                        </>
                                    )
                                })
                            }
                        </Container>
                    </Drawer>
                </>
            )}
        </div>
    )
}

export default Comparator