"use client"



import AboutUs from "../components/aboutus/AboutUs";
import Blog from "../components/blog/Blog";
import ContactUs from "../components/contactus/ContactUs";
import CallToAction from "../components/cta/CallToAction";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";

export default function Home() {

    return (
        <>
            <main>

                <Hero />
                <Portfolio />
                <Services />
                <Testimonial />
                <Blog />
                <CallToAction />
                <AboutUs />
                <ContactUs />
            </main>

        </>
    )
}