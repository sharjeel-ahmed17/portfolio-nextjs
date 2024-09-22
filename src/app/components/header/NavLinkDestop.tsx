import Link from "next/link";
import { INavlist } from "./interface";


export default function NavLinkDestop({ item }: INavlist) {
    const { name, url } = item;
    return (
        <Link href={url} className="hover:text-gray-900 capitalize">{name}</Link>
    )
}