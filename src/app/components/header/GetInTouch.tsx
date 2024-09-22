import Link from "next/link";


export default function GetInTouch() {
    return (
        <div className="hidden md:flex">
            <Link
                href="#contact"
                className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
            >
                Get in Touch
            </Link>
        </div>
    )
}