import useDebounce from '../shared/useDebounce/useDebounce';
import { search } from '../../actions';
import { useState } from 'react';

export function useSuggestion() {
    const debounceFunction = useDebounce();
    const [suggestions, setSuggestions] = useState({ count: 0, status: 'idle' })

    const getSuggestions = (param) => {
        setSuggestions((state) => ({
            ...state,
            status: 'pending'
        }))

        if (param === "") {
            setSuggestions((state) => ({
                ...state,
                status: 'idle'
            }))
            return;
        }

        debounceFunction(async () => {
            if (param.trim().length >= 2) {
                const res = await search(param);
                if (res) {
                    setSuggestions({
                        ...res,
                        status: 'resolved'
                    })
                } else {
                    setSuggestions((state) => ({
                        ...state,
                        status: 'rejected'
                    }))
                }
            }
        }, 500);

    }

    const isIdle = suggestions.status === "idle";
    const isLoading = suggestions.status === 'pending';
    const isResolved = suggestions.status === 'resolved';
    const isRejected = suggestions.status === 'rejected';

    return [
        suggestions,
        getSuggestions,
        isIdle,
        isLoading,
        isResolved,
        isRejected,
    ]

}