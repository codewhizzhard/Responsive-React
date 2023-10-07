import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./enums"


type Props = {
    page: string,
    selected: SelectedPage,
    setSelected: React.Dispatch<React.SetStateAction<SelectedPage>>
}

const Links = ({page, selected, setSelected}: Props) => {
  const lowerCase = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
        className={`${selected === lowerCase ? "text-orange-300" : ""}`}
        href={`#${lowerCase}`}
        onClick={() => {if(selected) {setSelected(lowerCase)}}}
    >
        {page}
    </AnchorLink>
  )
}

export default Links