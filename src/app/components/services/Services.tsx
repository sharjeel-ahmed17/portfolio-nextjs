import { ServiceData } from "@/app/data/services/servics";
import ServiceCards from "./ServiceCards";

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
                            {
                                ServiceData.map((item, index) => {
                                    return (
                                        <ServiceCards key={index} item={item} />
                                    )
                                })
                            }
                            {/* <ServiceCards />
                            <ServiceCards />
                            <ServiceCards /> */}
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

