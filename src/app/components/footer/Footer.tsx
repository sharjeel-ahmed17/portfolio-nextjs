import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface QuickLinksData {
    name: string;
    url: string;
}
const quickLinks: QuickLinksData[] = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100063755231469"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/foot_fiesta24/"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sharjeelahmed17/"
    },
    {
        name: "Twitter",
        url: "https://www.twitter.com"
    }

]

interface ResourcesData {
    name: string;
    url: string;
}

const resources: ResourcesData[] = [
    {
        name: "Web Development",
        url: "#"
    },
    {
        name: "Mobile Development",
        url: "#"
    },
    {
        name: "Marketing",
        url: "#"
    }

]

interface SocialMediaIconData {
    icon: any
}
const socialMediaIcon: SocialMediaIconData[] = [
    {
        icon: <FaSquareFacebook size={32} color="#fff" />
    },
    {
        icon: <FaLinkedin size={32} color="#3b5998" />
    },
    {
        icon: <FaInstagram size={32} color="#FFC0CB" />
    }
]
export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex flex-col md:flex-row justify-between items-start pace-x-12">
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
                                    {
                                        quickLinks.map((item, index) => {
                                            return (
                                                <QuickLinksItem key={index} item={item} />
                                            )
                                        })
                                    }


                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Resources</h4>
                                <ul>
                                    {
                                        resources.map((item, index) => {
                                            return (
                                                <ResourcesList key={index} item={item} />
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        {/* Social Media Links */}
                        <div className="md:w-1/3 text-center md:text-left">
                            <h4 className="font-semibold mb-4">Follow Me</h4>
                            <div className="flex justify-center md:justify-start space-x-4">
                                {
                                    socialMediaIcon.map((item, index) => (
                                        <SocialICon key={index} item={item} />
                                    ))
                                }

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

interface IICon {
    item: {

        icon: any;
    }
}
function SocialICon({ item }: IICon) {
    const { icon } = item;
    return (
        <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
        >
            {icon}
        </Link>
    )
}
interface IResources {
    item: {
        name: string,
        url: string

    }
}
function ResourcesList({ item }: IResources) {
    const { name, url } = item;
    return (
        <li className="mb-2">
            <a
                href={url}
                className="text-gray-400 hover:text-white transition-colors"
            >
                {name}
            </a>
        </li>
    )
}


interface IQuickLinks {
    item: {
        name: string,
        url: string

    }
}
function QuickLinksItem({ item }: IQuickLinks) {
    const { name, url } = item;
    return (
        <li className="mb-2">
            <Link
                href={url}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
            >
                {name}
            </Link>
        </li>
    )
}