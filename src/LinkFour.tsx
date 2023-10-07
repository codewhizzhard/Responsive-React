
import { StarIcon } from "@heroicons/react/20/solid"


const LinkFour = ( ) => {
  return (
    <section id="linkfour"  className="flex flex-col py-12 border-b-2 border-solid mm:py-24 mw:flex-row">
        <blockquote className="border border-solid w-[80%] mx-auto text-black text-center rounded-2xl max-w-[340px] mb-6 dark:text-white dark:hover:border-light-orange max-h-[405px]">
            <figure className="pt-12 text-sm font-semibold">
                <h5>START</h5>
                <b className="pt-2 text-5xl font-semibold">Free</b>
                <figcaption className="text-sm font-normal text-light-text dark:text-deep-gray">Next 3 months</figcaption>
            </figure>
            <ul className="flex flex-col gap-2 pt-8 text-sm font-normal">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
            </ul>
            <div>
                <hr className="w-[80%] mx-auto"/>
                <button className="p-3 my-6 text-lg font-semibold border border-solid rounded-lg hover:bg-orange hover:text-white">Subscripe</button>
                <p className="px-2 pb-2 text-sm font-normal">Two line long header example for your web project</p>
            </div>
        </blockquote>
        <blockquote className=" border border-solid w-[80%] mx-auto text-black text-center rounded-2xl max-w-[340px] mb-6 relative dark:text-white dark:hover:border-light-orange max-h-[405px]">
        <span className="w-[88px] bg-orange h-6 flex gap-2 rounded-lg pl-2 items-center absolute right-0 text-white">
                <StarIcon className="w-4 h-4"/>
                <p>Popular</p>
            </span>
            <figure className="pt-12 text-sm font-semibold">
                <h5>PRO</h5>
                <b className="flex items-center justify-center pt-2 text-5xl font-semibold">$38 <span className="pl-2 text-lg font-normal text-light-text dark:text-deep-gray"> /mo</span></b>
                <figcaption className="text-sm font-normal text-light-text dark:text-deep-gray">Charging $456 per/y</figcaption>
            </figure>
            <ul className="flex flex-col gap-2 pt-8 text-sm font-normal">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
            </ul>
            <div>
                <hr className="w-[80%] mx-auto"/>
                <button className="p-3 my-6 text-lg font-semibold border border-solid rounded-lg hover:bg-orange hover:text-white">Subscripe</button>
                <p className="px-2 pb-2 text-sm font-normal">Two line long header example for your web project</p>
            </div>
        </blockquote>
        <blockquote className="border border-solid w-[80%] mx-auto text-black text-center rounded-2xl max-w-[340px] dark:text-white dark:hover:border-light-orange max-h-[405px]">
            <figure className="pt-12 text-sm font-semibold">
                <h5>BUSINESS</h5>
                <b className="flex items-center justify-center pt-2 text-5xl font-semibold">$78 <span className="pl-2 text-lg font-normal text-light-text dark:text-deep-gray"> /mo</span></b>
                <figcaption className="text-sm font-normal text-light-text dark:text-deep-gray">Charging $456 per/y</figcaption>
            </figure>
            <ul className="flex flex-col gap-2 pt-8 text-sm font-normal">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
            </ul>
            <div>
                <hr className="w-[80%] mx-auto"/>
                <button className="p-3 my-6 text-lg font-semibold border border-solid rounded-lg hover:bg-orange hover:text-white">Subscripe</button>
                <p className="px-2 pb-2 text-sm font-normal">Two line long header example for your web project</p>
            </div>
        </blockquote>
    </section>
  )
}

export default LinkFour