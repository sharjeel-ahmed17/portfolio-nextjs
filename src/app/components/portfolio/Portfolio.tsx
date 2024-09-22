export default function Portfolio() {
    return (
        <>
            <div className="pt-24">

                <section id="projects" className="bg-white py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">

                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                            My <span className="text-blue-500">Portfolio</span>
                        </h2>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                            <PortfolioCard />
                            <PortfolioCard />
                            <PortfolioCard />




                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}


function PortfolioCard() {
    return (
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYpkysyyLe-Eoc7i9yofc1y9rRBLYrP9wPw&s"
                alt="Project 1"
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Project Title 1
                </h3>
                <p className="text-gray-600 mb-4">
                    A brief description of the project showcasing the key features and
                    technologies used.
                </p>
                <a href="#" className="text-blue-500 font-semibold hover:underline">
                    View Project
                </a>
            </div>
        </div>
    )

}