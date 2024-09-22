import Link from "next/link";

export default function AboutUs() {
    return (
        <>
            <div className="pt-24">

                <section id="about" className="bg-gray-50 py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">

                            <div className="mb-8 md:mb-0 md:w-1/2">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBVGK211S5X4_noTLHai-QT-5k3JVIcCbKQ&s"
                                    alt="About Us"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    About <span className="text-blue-500">Me</span>
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    I’m [Your Name], a passionate developer and designer with a love for
                                    creating beautiful, functional websites. With over [X years] of
                                    experience in the industry, I’ve had the pleasure of working with
                                    clients from various industries, helping them bring their ideas to
                                    life.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    My expertise lies in crafting pixel-perfect user interfaces, clean
                                    code, and seamless user experiences. Whether you're a startup or a
                                    large enterprise, I am committed to delivering top-quality solutions
                                    that exceed your expectations.
                                </p>
                                <Link
                                    href="#contact"
                                    className="inline-block bg-blue-500 text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}