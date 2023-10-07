import header from "./assets/Sections Logo.svg"
import twitter from "./assets/twitter.svg"
import instagram from './assets/instagram.svg'
import youtube from "./assets/youtube.svg"

const LinkFive = () => {
  return (
    <section className="py-12 mx-auto border-b-2 border-solid mm:py-24 w-[80%]">
        <img src={header} alt="section" className="dark:bg-deep-gray dark:text-white"/>
        <blockquote className="flex flex-col gap-16 pt-16 cursor-pointer mw:grid mw:grid-cols-4">
        <ul className="text-sm font-normal">
            <b className="text-lg font-semibold">Title</b>
            <li className="py-3">Link One</li>
            <li>Link Two</li>
        </ul>
        <ul  className="text-sm font-normal">
            <b className="text-lg font-semibold">Title</b>
            <li className="py-3">Link One</li>
            <li className="pb-3">Link TWO</li>
            <li className="pb-3">Link Three</li>
            <li className="pb-3">Link Four</li>
            <li>Link Five</li>
        </ul>
        <ul className="text-sm font-normal">
            <b className="text-lg font-semibold">Title</b>
            <li className="py-3">Link One</li>
            <li className="pb-3">Link Two</li>
            <li>Link Three</li>
        </ul>
        <ul className="text-sm font-normal">
            <b className="text-lg font-semibold">Soical</b>
            <li className="py-3 flex gap-2 items-center">
                <img src={twitter} alt="twitter icon" className="w-6 h-6"/>
                Twitter
            </li>
            <li className="pb-3 flex gap-2 items-center">
                <img src={youtube} alt="youtube icon" className="w-6 h-6"/>
                Youtube
            </li>
            <li className="pb-3 flex gap-2 items-center">
                <img src={instagram} alt="instagram icon" className="w-6 h-6"/>
                Instagram
            </li>
        </ul>
        </blockquote>
    </section>
  )
}

export default LinkFive