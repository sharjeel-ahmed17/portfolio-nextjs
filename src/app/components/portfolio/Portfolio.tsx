import { porfolioData } from "@/app/data/portfolio/portfolio";
import PortfolioCard from "./PortfolioCard";

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
                            {
                                porfolioData.map((item, index) => {
                                    return <PortfolioCard key={index} item={item} />
                                })
                            }





                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}


