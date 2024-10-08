import { IServices } from "./interface"


const ServiceCards = ({ item }: IServices) => {
    const { imageUrl, alt, title, description, svg } = item;
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
            <div className="flex items-center justify-center mb-6">
                {/* Icon (use any SVG or FontAwesome icons here) */}
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v8m0 0l-3-3m3 3l3-3M4 4h16v16H4V4z"
                    />
                </svg> */}
                {/* {svg} */}
                <img src={imageUrl} className="w-40 h-28 text-blue-500" alt="" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {title}
            </h3>
            <p className="text-gray-600 text-center">
                {description}
            </p>
        </div>
    )
}

export default ServiceCards