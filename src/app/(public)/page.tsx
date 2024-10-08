"use client"

import AOS from 'aos'
import "aos/dist/aos.css"

import AboutUs from "../components/aboutus/AboutUs";
import Blog from "../components/blog/Blog";
import ContactUs from "../components/contactus/ContactUs";
import CallToAction from "../components/cta/CallToAction";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        AOS.init({

            easing: 'ease-in-out',
            duration: 1000,
            delay: 100,
            mirror: true,
            anchorPlacement: 'bottom-bottom',
            offset: 160,

            once: true
        });
        AOS.refresh();


    }, [])
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