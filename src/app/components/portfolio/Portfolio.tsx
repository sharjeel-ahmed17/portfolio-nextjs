"use client"
import { porfolioData } from "@/app/data/portfolio/portfolio";
import PortfolioCard from "./PortfolioCard";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Portfolio() {
    const [visible, setVisible] = useState<number>(3);

    const showMore = () => {
        setVisible((prev) => prev + 3);
        toast.success('This is a success message!')

    }
    const showAll = () => {
        setVisible(porfolioData.length)
        toast.success('show all projects ')

    }
    const showLess = () => {
        setVisible((prev) => Math.max(3, prev - 3));
        toast.success('show less projects')
    }
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
                                porfolioData.slice(0, visible).map((item, index) => {
                                    return <PortfolioCard



                                        key={index} item={item} />
                                })
                            }





                        </div>
                        <div className="buttons mx-auto text-center mt-8 flex gap-2 justify-center">
                            {visible < porfolioData.length && (
                                <button onClick={showMore} className="p-3 bg-blue-500 hover:stroke-lime-500 text-white rounded-full">Show More</button>
                            )}
                            {visible < porfolioData.length && (
                                <button onClick={showAll} className="p-3 bg-blue-500 hover:stroke-lime-500 text-white rounded-full">Show All</button>
                            )}
                            {visible > 3 && (
                                <button onClick={showLess} className="p-3 bg-blue-500 hover:stroke-lime-500 text-white rounded-full">Show Less</button>
                            )}
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}


