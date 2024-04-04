'use client'
import { useRef } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import Input from "../shared/Input";
import Suggestions from './Suggestions';
import Container from '../shared/Container';
import styles from './Searchbar.module.css'
import { useSuggestion } from './useSuggestion';

const Searchbar = () => {
    const inputRef = useRef(null);
    const [suggestions,
        getSuggestions,
        isIdle,
        isLoading,
        isResolved,
        isRejected] = useSuggestion()

    const handleChange = (e) => {
        e.preventDefault();
        getSuggestions(inputRef.current.value);
    }

    return (
        <div className={styles.Searchbar}>
            <Container>
                <Input suffix={<FaMagnifyingGlass />} onChange={(e) => handleChange(e)} onButtonClick={(e) => handleSearch(e)} placeholder="Pesquisar fundo, ação ou bdr" ref={inputRef} />
                {!isIdle && (
                    <Suggestions loading={isLoading} suggestions={isResolved ? suggestions : null} />
                )}

            </Container>
        </div>
    )
}

export default Searchbar;