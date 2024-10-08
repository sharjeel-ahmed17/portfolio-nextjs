import toast from "react-hot-toast";
import { IPortfolio } from "./interface";
import Link from "next/link";

export default function PortfolioCard({ item }: IPortfolio) {
    const { imageUrl, title, description, url, alt } = item;
    return (
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"

        >
            <img
                src={imageUrl}
                alt={alt}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4">
                    {description}
                </p>
                <Link href={url} className="text-blue-500 font-semibold hover:underline">
                    View Project
                </Link>
            </div>
        </div>
    )

}