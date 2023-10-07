import avatar from "./assets/Avatar 1.svg"
import img from "./assets/My project 1.svg"
type Props = {
  isAboveWidth: boolean
}

const Home = ({isAboveWidth}: Props) => {

    const flexBox = isAboveWidth ? "flex-row-reverse gap-6 px-16" : "flex-col"
    // check if flexbox is true, then set the width for larger screen base of flexBox value
    const flexBoxChecker = isAboveWidth  ? "w-[50%] flex-shrink flex-grow max-w-[450px] " : "max-w-[400px]"
    const checker = isAboveWidth  ? "w-[50%]" : "w-[88%] mx-auto"
  return (
    <section id="home" className={`flex ${flexBox} pt-24 item-center border-b-2 border-solid pb-4 border-[#E5E5E5]`}>
        <figure className={`${flexBoxChecker} h-[384px] mx-auto rounded-lg flex-shrink flex-grow w-[88%] overflow-hidden`}>
            <img src={img} alt="avatar" className="w-[100%] h-[100%]" width="320" height="320" />
            <figcaption className="absolute left-[-10000px]">image</figcaption>
        </figure>
        <article className={`${checker}`}>
            <h1 className="text-[3rem] leading-[56px] font-semibold pt-9 pb-6">UI Design for Web & Mobile Apps</h1>
            <p className="text-xl font-normal">Effective marketing and advertising materials. It is also a great tool to use when you want to present your.</p>
            <div className={`${isAboveWidth ? "flex-row" :"flex-col"} flex gap-4 pt-6 justify-center`}>
              <button /* className={`${isAboveWidth ? "" : "w-full"} bg-orange`} */ className="px-5 py-2 rounded-lg bg-orange">Button</button>
              <figure className="grid items-center grid-flow-col w-[270px] mx-auto mw:mx-2">
                 <img src={avatar} alt="profile-icon"/>
                  <img src={avatar} alt="profile-icon" className=""/>
                  <img src={avatar} alt="profile-icon"/>
                  <img src={avatar} alt="profile-icon"/>
                  <figcaption className="pl-3">700 000+ Users</figcaption>
                </figure>
            </div>
        </article>
    </section>
  )
}

export default Home