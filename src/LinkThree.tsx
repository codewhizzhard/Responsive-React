import img from "./assets/Donut Chart 2.svg"
import loading from "./assets/Donut Chart 3.svg"


const LinkThree = () => {
  return (
    <section  id="linkthree"  className="w-[88%] mx-auto  py-12 border-b-2 border-solid mm:py-24">
        <h3 className="text-4xl font-semibold text-center">Our Approach to UX Design</h3>
        <p className="text-lg font-normal text-center">Effective marketing and advertising materials. It is also a great tool to use when you want to present your.</p>
        <blockquote className="flex flex-col pt-12 mx-auto mm:pt-16 mw:flex-row mw:gap-16">
            <figure className="w-[80%] mx-auto mw:w-[30%]">
                <img src={img} alt='donut picture' width="244" height="244" className="max-w-[244px] w-full text-center mx-auto"/>
                <figcaption className="w-full text-center text-light-text dark:text-deep-gray">Effective marketing and advertising materials. It is also a great tool.</figcaption>
            </figure>
            <ul className=" mw:w-[80%] pt-16 mw:grid mw:grid-cols-2 mw:gap-6">
                <li className="flex gap-6 pb-12">
                    <img src={loading} alt="loading" className="w-16 h-auto"/>
                    <span className="flex flex-col justify-start">
                        <h4 className="text-2xl font-semibold">Title</h4>
                        <p>Effective marketing and advertising materials.</p>
                    </span>
                </li>
                <li className="flex gap-6 pb-12">
                    <img src={loading} alt="loading" className="w-16 h-auto"/>
                    <span className="flex flex-col justify-start">
                        <h4 className="text-2xl font-semibold">Title</h4>
                        <p>Effective marketing and advertising materials.</p>
                    </span>
                </li>
                <li className="flex gap-6 pb-12">
                    <img src={loading} alt="loading" className="w-16 h-auto"/>
                    <span className="flex flex-col justify-start">
                        <h4 className="text-2xl font-semibold">Title</h4>
                        <p>Effective marketing and advertising materials.</p>
                    </span>
                </li>
                <li className="flex gap-6 pb-12">
                    <img src={loading} alt="loading" className="w-16 h-auto"/>
                    <span className="flex flex-col justify-start">
                        <h4 className="text-2xl font-semibold">Title</h4>
                        <p>Effective marketing and advertising materials.</p>
                    </span>
                </li>
            </ul>
        </blockquote>
    </section>
  )
}

export default LinkThree