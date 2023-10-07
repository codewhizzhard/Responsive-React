import img from "./assets/clint-patterson-dYEuFB8KQJk-unsplash.jpg"
type Props = {
    isAboveWidth: boolean
}

const LinkTwo = ({ isAboveWidth }: Props) => {
    const flexBox = isAboveWidth ? "flex gap-12 flex-row-reverse" : "flex flex-col"
    const h2 = "font-semibold text-xl pb-2 pt-8"
    const p = "font-normal text-lg"
  return (
    <section id="linktwo"  className="py-12 border-b-2 border-solid mm:py-24">
        <figure className={`${flexBox} w-[88%] mx-auto`}>
            <img src={img} alt="picture of a programmer" className="mx-auto h-[340px] mm:h-[400px] rounded-lg mw:w-[40%] mm:w-1/2"/>
            <ul className="pt-4 list-none">
                <li className="flex items-center gap-2">
                    {/* <div className="bg-red-400 ">q</div> */}
                    <div>
                        <h2 className={h2}>Title</h2>
                        <p className={p}>Effective marketing and advertising materials. It is also a great tool to use when you want to present your.</p>
                    </div>
                </li>
                <li>
                    <span></span>
                    <h2 className={h2}>Title</h2>
                    <p className={p}>Effective marketing and advertising materials. It is also a great tool to use when you want to present your.</p>
                </li>
                <li>
                    <span></span>
                    <h2 className={h2}>Title</h2>
                    <p className={p}>Effective marketing and advertising materials. It is also a great tool to use when you want to present your.</p>
                </li>
            </ul>
        </figure>
    </section>
  )
}

export default LinkTwo