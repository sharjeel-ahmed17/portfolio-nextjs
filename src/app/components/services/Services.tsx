export default function Services() {
    return (
        <>
            <div className="pt-24">

                <section id="services" className="bg-gray-50 py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        {/* Section Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                            My <span className="text-blue-500">Services</span>
                        </h2>
                        {/* Services Grid */}
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <ServiceCards />
                            <ServiceCards />
                            <ServiceCards />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

function ServiceCards() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
                {/* Icon (use any SVG or FontAwesome icons here) */}
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v8m0 0l-3-3m3 3l3-3M4 4h16v16H4V4z"
                    />
                </svg> */}
                <img src="/images/me.png" className="h-12 w-12 text-blue-500" alt="" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Web Development
            </h3>
            <p className="text-gray-600 text-center">
                I create responsive, fast, and modern websites that look great on
                any device. Whether it's a personal website or an enterprise
                solution.
            </p>
        </div>
    )
}