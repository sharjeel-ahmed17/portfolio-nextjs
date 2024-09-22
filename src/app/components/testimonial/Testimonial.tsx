export default function Testimonial() {
    return (
        <>
            <div className="pt-24">
                {/* Other sections like Hero, Portfolio, Services */}
                {/* Testimonial Section */}
                <section id="testimonials" className="bg-white py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        {/* Section Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                            What <span className="text-blue-500">Clients</span> Say
                        </h2>
                        {/* Testimonials Grid */}
                        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">

                            <TestimonialCard />
                            <TestimonialCard />
                            <TestimonialCard />
                            <TestimonialCard />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

function TestimonialCard() {
    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png"
                    alt="Client 2"
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        Jane Smith
                    </h3>
                    <p className="text-sm text-gray-500">
                        Marketing Head, Business Co.
                    </p>
                </div>
            </div>
            <p className="text-gray-600 italic">
                "Their work is simply amazing! I’ve seen incredible improvements in
                my website’s traffic and user engagement since working with them."
            </p>
        </div>
    )
}