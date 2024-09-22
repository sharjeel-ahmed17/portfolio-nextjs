import Link from "next/link";
import { INavlist } from "./interface";

export default function NavListMob({ item }: INavlist) {
    const { name, url } = item;
    return (
        <Link href={url} className=" capitalize hover:bg-slate-950 p-4 hover:text-white">{name}</Link>
    )
}