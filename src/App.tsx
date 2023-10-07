import { useState, useEffect } from "react"
import Header from "./Header"

function App() {

  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const heightChecker = () => {
        if (window.scrollY === 0) {
          setIsOnTop(true)
        }
        if (window.scrollY !== 0) {
          setIsOnTop(false)
        }
    }
    window.addEventListener("scroll", heightChecker)
    return () => window.removeEventListener("scroll", heightChecker)
}, [])

  return (
    <>
     <Header isOnTop={isOnTop} />
    </>
  )
}

export default App
