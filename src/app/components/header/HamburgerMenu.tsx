


export default function HamburgerMenu({ toggleMenu }: { toggleMenu: any }) {
    return (
        <div className="md:hidden flex items-center">
            <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
        </div>
    )
}