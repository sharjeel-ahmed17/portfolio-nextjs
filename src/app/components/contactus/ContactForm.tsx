export default function ContactForm() {
    return (
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
    )
}