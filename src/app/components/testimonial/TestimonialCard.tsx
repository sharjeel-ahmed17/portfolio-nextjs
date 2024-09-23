export default function TestimonialCard({ item }: ITestimonial) {

    const { imageUrl, name, title, description, alt } = item;
    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
                <img
                    src={imageUrl}
                    alt={alt}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {title}
                    </p>
                </div>
            </div>
            <p className="text-gray-600 italic">
                "{description}"
            </p>
        </div>
    )
}