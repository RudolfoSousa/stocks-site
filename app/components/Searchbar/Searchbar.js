'use client'

import { useRef, useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import Input from "../shared/Input";
import Suggestions from '../shared/Suggestions';
import Container from '../shared/Container';
import styles from './Searchbar.module.css'
import { useSuggestion } from '../shared/useSuggestion/useSuggestion';
import OutsideClickHandler from '../shared/OutsideClickHandler';

const Searchbar = () => {
    const inputRef = useRef(null);
    const [showSuggestion, setShowSuggestion] = useState(false);
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

    const handleFocus = (e) => {
        e.preventDefault();
        setShowSuggestion(true);
    }

    const shouldRenderSuggestions = Boolean(!isIdle && (isResolved || isLoading) && showSuggestion)

    return (
        <div className={styles.Searchbar}>
            <Container>
                <OutsideClickHandler onOutsideClick={() => setShowSuggestion(false)}>
                    <Input suffix={<FaMagnifyingGlass />} onFocus={(e) => handleFocus(e)} onChange={(e) => handleChange(e)} placeholder="Pesquisar fundo, ação ou bdr" ref={inputRef} />
                    {shouldRenderSuggestions && (
                        <Suggestions loading={isLoading} suggestions={suggestions} />
                    )}
                </OutsideClickHandler>
            </Container>
        </div>
    )
}

export default Searchbar;