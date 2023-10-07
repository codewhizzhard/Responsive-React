import { useState, useEffect } from "react";

type Size = {
    width: number | undefined
}

// second option to get the window size
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth
            })
        }
        console.log(windowSize)
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return windowSize
}

export default useWindowSize