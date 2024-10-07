// app/blog/page.tsx

import Link from 'next/link';
import { BlogData } from '@/app/data/blog/blog';

export default function BlogPage() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {BlogData.map((item, index) => (
                    <BlogCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

function BlogCard({ item }: { item: any }) {
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
                    <Link href={`${url}`}>
                        {title}
                    </Link>
                </h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <Link href={`${url}`} className="text-blue-500 font-semibold hover:underline">
                    Read More
                </Link>
            </div>
        </div>
    );
}
