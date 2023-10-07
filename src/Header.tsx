import { useState } from "react"
import header from './assets/Sections Logo.svg'
import icon from "./assets/Icon.svg"
import maxWidth from './hooks/maxWidth'
import { Bars3Icon } from '@heroicons/react/20/solid'
import Links from "./Link"
import { Link } from "react-scroll"
import Home from './Home'
import LinkOne from './LinkOne'
import LinkTwo from './LinkTwo'
import LinkThree from './LinkThree'
import LinkFour from './LinkFour'
import LinkFive from './LinkFive'
import { SelectedPage } from './enums'
type Props = {
    isOnTop: boolean
}

const Header = ({isOnTop}: Props) => {

    const [selected, setSelected]  = useState<SelectedPage>(SelectedPage.Home)

    const flex = "flex justify-between"
    const isAboveWidth = maxWidth("(min-width: 950px)")
    const topOfPage = !isOnTop && "bg-red-200 transition duration-200"

    const date = new Date()

  return (
    <>
        <header className={`${flex} py-4 px-6 sticky top-0 z-10 ${topOfPage}`}>
            <Link to={SelectedPage.Home} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={100} ><img src={header} alt="section"/>
            </Link>
            {isAboveWidth ? (
                 /* this will only display on screen with the  //* min width of 900px //*/
                    <nav className={`${flex} gap-8 text-base font-semibold text-black`}>
                    <span className='flex items-center'> 
                    <Links page={"Link One"} 
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <img src={icon} alt="dropdownIcon" width="20px" height="20px" className='w-5 h-auto pt-1 pl-2'/>
                    </span>
                    <span className='flex items-center'>
                    <Links page={"Link Two"}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <img src={icon} alt="dropdownIcon" width="20px" height="20px" className='w-5 h-auto pt-1 pl-2'/>
                    </span>
                    <span className='flex items-center'>
                    <Links page={"Link Three"}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <img src={icon} alt="dropdownIcon" width="20px" height="20px" className='w-5 h-auto pt-1 pl-2'/>
                    </span>
                    <span className='flex items-center'>
                    <Links page={"Link Four"}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <img src={icon} alt="dropdownIcon" width="20px" height="20px" className='w-5 h-auto pt-1 pl-2'/>
                    </span>
                    <div className={`${flex} gap-2`}>
                        <button className=' border border-solid py-[10px] px-4 rounded-lg hover:bg-orange transition duration-700 delay-100'>Button</button>
                        <button className=' border border-solid py-[10px] px-4 rounded-lg hover:bg-orange transition duration-700 delay-100'>Button</button>
                    </div>
                </nav>) : (
                    /*  displays on screen below //* width of 900px//*/
                    <button>
                        <Bars3Icon className='w-6 h-6 transition transform hover:rotate-360'/>
                    </button>
                )
            }
        </header>
        <main className='min-h-screen dark:bg-black dark:text-white dark:border-light-dark'>
            <Home isAboveWidth={isAboveWidth}/>
            <LinkOne />
            <LinkTwo isAboveWidth={isAboveWidth}/>
            <LinkThree />
            <LinkFour />
            <LinkFive />
        </main>
        <footer className='py-12 text-sm font-normal dark:bg-black'>
            
            <article className="w-[80%]  mw:flex mw:items-center justify-between mx-auto dark:text-deep-gray">
            <p><span>&copy; {date.getFullYear()} </span> Pixsellz – High-Quality Resources for UI Designers</p>
            <ul className='flex gap-5 pt-6 mw:pt-0'>
                <li>Link One</li>
                <li>Link Two</li>
                <li>Link Two</li>
            </ul>
            </article>
        </footer>
    </>
  )
}

export default Header