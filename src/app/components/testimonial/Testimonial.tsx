import { testimonialData } from "@/app/data/header/testimonial/testimonial";
import TestimonialCard from "./TestimonialCard";

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
                            {
                                testimonialData.map((item, index) => {
                                    return <TestimonialCard key={index} item={item} />
                                })
                            }

                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

