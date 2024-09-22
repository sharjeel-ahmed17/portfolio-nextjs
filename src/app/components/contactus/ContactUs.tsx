export default function ContactUs() {
    return (
        <>
            <div className="pt-24">
                {/* Other sections like Hero, Portfolio, Services, Testimonials, Blog, About Us */}
                {/* Contact Us Section */}
                <section id="contact" className="bg-white py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        {/* Section Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                            Get in <span className="text-blue-500">Touch</span>
                        </h2>
                        {/* Contact Form and Info */}
                        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-12">
                            {/* Contact Form */}
                            <div className="w-full md:w-1/2 mb-12 md:mb-0">
                                <form
                                    action="#"
                                    method="POST"
                                    className="bg-gray-50 p-8 rounded-lg shadow-lg"
                                >
                                    <div className="mb-6">
                                        <label
                                            htmlFor="name"
                                            className="block text-gray-700 font-semibold mb-2"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your name"

                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 font-semibold mb-2"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter your email"

                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="message"
                                            className="block text-gray-700 font-semibold mb-2"
                                        >
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Write your message here"

                                            defaultValue={""}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            {/* Contact Information */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Contact Information
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Feel free to reach out through the form or use the following contact
                                    details to get in touch with me directly.
                                </p>
                                <PersonalInformation />
                                <PersonalInformation />
                                <PersonalInformation />

                                <div className="flex justify-center md:justify-start space-x-4">
                                    <a href="#" className="text-gray-600 hover:text-blue-500">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-500">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-500">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-500">
                                        <i className="fab fa-github" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}


function PersonalInformation() {
    return (
        <p className="text-gray-900 font-semibold mb-2">
            Location:{" "}
            <span className="text-blue-500">123 Street, City, Country</span>
        </p>
    )
}