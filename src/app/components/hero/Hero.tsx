import Link from "next/link";
import toast from "react-hot-toast";


export default function Hero() {
    return (
        <>
            <div className="pt-24">
                {/* Hero Section */}
                <section className="bg-gray-100 min-h-screen flex items-center">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Hi, I’m <span className="text-blue-500">Sharjeel Ahmed</span>
                            </h1>
                            <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-lg">
                                A passionate{" "}
                                <span className="font-semibold text-gray-900">Web Developer</span>{" "}
                                creating stunning and user-friendly web experiences.
                            </p>
                            <div className="mt-8 flex justify-center md:justify-start space-x-4">
                                <Link
                                    onClick={() => toast.success('view projects')}
                                    href="#projects"
                                    className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                                >
                                    View Projects
                                </Link>
                                <Link
                                    onClick={() => toast.success('Contact me')}
                                    href="#contact"
                                    className="bg-gray-100 border border-gray-300 text-gray-700 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                        {/* Hero Image */}
                        <div className="flex-1 mt-12 md:mt-0">
                            <img
                                src="/images/me.png"
                                alt="Hero Image"
                                className="w-full h-full object-cover rounded-full shadow-lg border-none bg-yellow-400"

                            />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}