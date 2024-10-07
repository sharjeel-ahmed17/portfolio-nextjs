
import { BlogData } from "@/app/data/blog/blog";
import { notFound } from "next/navigation";

interface BlogParams {
    params: {
        slug: string;
    };
}

export default function BlogDetails({ params }: BlogParams) {
    const { slug } = params;

    // Find the blog post based on the slug
    const blogPost = BlogData.find(
        (post) => post.url === `/blog/${slug}`
    );

    // Handle if no blog post matches the slug (404)
    if (!blogPost) {
        return notFound();
    }

    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Blog Title */}
                <h1 className="text-4xl font-bold mb-6">
                    {blogPost.title}
                </h1>

                {/* Blog Image */}
                <div className="w-full h-auto mb-6">
                    <img
                        src={blogPost.imageUrl}
                        alt={blogPost.alt}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Blog Description */}
                <div className="prose lg:prose-xl mx-auto text-gray-700">
                    <p>{blogPost.description}</p>
                </div>
            </div>
        </div>
    );
}
