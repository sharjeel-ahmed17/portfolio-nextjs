import { BlogData } from "@/app/data/header/blog/blog"
import Link from "next/link"

export default function Blog() {
    return (
        <>
            <div className="pt-24">
                {/* Other sections like Hero, Portfolio, Services, Testimonials */}
                {/* Blog Section */}
                <section id="blog" className="bg-gray-50 py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        {/* Section Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                            Latest <span className="text-blue-500">Blog Posts</span>
                        </h2>
                        {/* Blog Grid */}
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                BlogData.map((item, index) => {
                                    return (
                                        <BlogCard key={index} item={item} />
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

interface IBLog {
    item: {
        imageUrl: string,
        title: string,
        description: string,
        url: string,
        alt: string
    }
}

function BlogCard({ item }: IBLog) {
    const { imageUrl, title, description, url, alt } = item;
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                src={imageUrl}
                className="w-full h-48 object-cover"
                alt={alt}
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    <a href="#" className="hover:text-blue-500">
                        {title}
                    </a>
                </h3>
                <p className="text-gray-600 mb-4">
                    {description}
                </p>
                <Link href={url} className="text-blue-500 font-semibold hover:underline">
                    Read More
                </Link>
            </div>
        </div>
    )
}

