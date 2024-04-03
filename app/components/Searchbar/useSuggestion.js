import useThrottle from '../shared/useThrottle/useThrottle';
import { search } from '../../actions';
import { useState } from 'react';

export function useSuggestion() {
    const throttleFunction = useThrottle();
    const [suggestions, setSuggestions] = useState({ count: 0, status: 'idle' })

    const getSuggestions = (param) => {
        setSuggestions((state) => ({
            ...state,
            status: 'pending'
        }))
        
        if (param && param !== "") {
            throttleFunction(async () => {
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
            }, 1000);
        } else {
            setSuggestions((state) => ({
                ...state,
                status: 'idle'
            }))
        }

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