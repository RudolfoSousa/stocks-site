import { useContext } from "react";
import { CompareContext } from "../CompareProvider";


const useCompare = () => {
    const compare = useContext(CompareContext);
    return { ...compare };
}

export default useCompare;