import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:space-x-12">
                        {/* Footer Logo and Description */}
                        <div className="mb-8 md:mb-0 md:w-1/3">
                            <h3 className="text-2xl font-bold mb-4">Sharjeel Ahmed</h3>
                            <p className="text-gray-400">
                                Passionate developer and designer creating beautiful, functional
                                websites to help businesses and individuals bring their ideas to life.
                            </p>
                        </div>
                        {/* Footer Navigation Links */}
                        <div className="flex flex-col md:flex-row md:space-x-8 mb-8 md:mb-0 md:w-1/3">
                            <div className="mb-6 md:mb-0">
                                <h4 className="font-semibold mb-4">Quick Links</h4>
                                <ul>

                                    <QuickLinksItem />
                                    <QuickLinksItem />
                                    <QuickLinksItem />
                                    <QuickLinksItem />
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Resources</h4>
                                <ul>

                                    <ResourcesList />
                                    <ResourcesList />
                                    <ResourcesList />
                                </ul>
                            </div>
                        </div>
                        {/* Social Media Links */}
                        <div className="md:w-1/3 text-center md:text-left">
                            <h4 className="font-semibold mb-4">Follow Me</h4>
                            <div className="flex justify-center md:justify-start space-x-4">

                                <SocialICon />
                                <SocialICon />
                                <SocialICon />
                                <SocialICon />
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom Line */}
                    <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
                        <p>© 2024 Sharjeel Ahmed. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}


function SocialICon() {
    return (
        <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
        >
            <FaSquareFacebook />
        </Link>
    )
}

function ResourcesList() {
    return (
        <li className="mb-2">
            <a
                href="#blog"
                className="text-gray-400 hover:text-white transition-colors"
            >
                Blog
            </a>
        </li>
    )
}

function QuickLinksItem() {
    return (
        <li className="mb-2">
            <a
                href="#portfolio"
                className="text-gray-400 hover:text-white transition-colors"
            >
                Portfolio
            </a>
        </li>
    )
}