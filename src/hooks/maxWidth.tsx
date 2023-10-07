import { useState, useEffect } from "react";

// getting the window width with maxwidth function
const maxWidth = (width: string) => {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        // follow the window width with window.matchMedia
        const media = window.matchMedia(width)
        // now set the state of matches to the boolean value of media
        const listener = () => {
            if (media.matches !== matches) {
                setMatches(media.matches)
            }
        }
        /// lauch it on run
        listener()
        window.addEventListener("resize", listener)
        // cleanup for maxwidth function
        return () => window.removeEventListener("resize", listener)

    },[matches, width])
    return matches
}

export default maxWidth
