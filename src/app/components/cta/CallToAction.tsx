import Link from "next/link";
import toast from "react-hot-toast";

export default function CallToAction() {
    return (
        <>
            <div className="pt-24">

                <section id="cta" className="bg-blue-500 py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">

                        <div className="text-center text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Work Together?
                            </h2>
                            <p className="text-lg md:text-xl mb-8">
                                Let's create something amazing. Get in touch today to start your
                                project!
                            </p>
                            <Link
                                onClick={() => toast.success('Contact me')}
                                href="#contact"
                                className="inline-block bg-white text-blue-500 font-semibold text-lg px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )

}