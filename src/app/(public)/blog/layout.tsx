// app/blog/layout.tsx

import React from 'react';

export default function BlogLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="bg-gray-50 min-h-screen">
            {/* Shared UI such as header or navigation */}
            <header className="bg-blue-500 text-white py-4 shadow-md">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <h1 className="text-3xl font-bold">Blog Page</h1>
                    <nav className="mt-4">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="/blog" className="hover:underline">All Blogs</a>
                            </li>
                            {/* Add more links as needed */}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Render the blog content */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8">
                {children}
            </div>
        </section>
    );
}
