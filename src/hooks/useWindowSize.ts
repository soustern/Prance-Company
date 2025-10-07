import { useEffect, useState } from "react";

export function useWindowSize() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleSize = () => setSize(window.innerWidth);

        window.addEventListener(`resize`, handleSize);

        return () => window.removeEventListener(`resize`, handleSize);
    }, [])

    return size;
}