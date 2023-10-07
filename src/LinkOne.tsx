import img from "./assets/clint-patterson-dYEuFB8KQJk-unsplash.jpg"
type Props = {}

const LinkOne = () => {
  return (
    <section id="linkone"  className="py-12 border-b-2 border-solid mm:py-24">
        <figure className="grid place-content-center w-[88%] mx-auto">
            <span className="flex gap-4 mx-auto mm:gap-12">
                <img src={img} alt="" className="w-24 h-24 rounded-full"/>
                <img src={img} alt="" className="w-24 h-24 rounded-full"/>
                <img src={img} alt="" className="w-24 h-24 rounded-full"/>
            </span>
            <figcaption className="absolute left-[-100000px]"></figcaption>
            <article className="pt-12 text-center">
                <p className="text-xl font-normal text-black dark:text-deep-gray">Effective marketing and advertising materials. It is also a great tool to use when you want to present your.</p>
                <button className="text-xl font-semibold text-orange-100">Learn more</button>
            </article>
        </figure>
    </section>
  )
}

export default LinkOne