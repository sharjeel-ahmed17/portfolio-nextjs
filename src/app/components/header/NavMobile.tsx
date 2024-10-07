import { Navlist } from "@/app/data/Navlist";
import GetInTouchMobile from "./GetInTouchMobile";
import NavListMob from "./NavListMob";

export default function NavMobile() {

    const navItemMobile = Navlist.map((item, index) => {
        return <NavListMob key={index} item={item} />
    })
    return (
        <nav className="flex flex-col space-y-4 py-4 px-6 text-gray-700">
            {navItemMobile}
            <GetInTouchMobile />
        </nav>
    )

}