export default function CallToAction() {
    return (
        <>
            <div className="pt-24">
                {/* Other sections like Hero, Portfolio, Services, Testimonials, Blog */}
                {/* Call to Action Section */}
                <section id="cta" className="bg-blue-500 py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        {/* CTA Content */}
                        <div className="text-center text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Work Together?
                            </h2>
                            <p className="text-lg md:text-xl mb-8">
                                Let's create something amazing. Get in touch today to start your
                                project!
                            </p>
                            <a
                                href="#contact"
                                className="inline-block bg-white text-blue-500 font-semibold text-lg px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )

}