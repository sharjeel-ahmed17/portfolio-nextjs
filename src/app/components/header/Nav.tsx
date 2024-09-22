import { Navlist } from "@/app/data/header/Navlist"
import NavLinkDestop from "./NavLinkDestop"

export default function Nav() {
    const navItem = Navlist.map((item, index) => {
        return (
            <NavLinkDestop key={index} item={item} />
        )
    })
    return (
        <nav className="hidden md:flex space-x-8 text-gray-700">
            {navItem}
        </nav>
    )
}