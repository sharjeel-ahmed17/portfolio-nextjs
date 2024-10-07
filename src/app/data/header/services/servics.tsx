interface ServicesData {
    imageUrl: string,
    alt: string,
    title: string,
    description: string,
    svg: any
}

export const ServiceData: ServicesData[] = [
    {
        imageUrl: "/images/webdevelopment.png",
        alt: "web development",
        title: "Web Development",
        description: "I create responsive, fast, and modern websites that look great on any device. Whether it's a personal website or an enterprise solution.",
        svg: <svg
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
        </svg>

    },
    {
        imageUrl: "/images/ui-ux.avif",
        alt: "ui ux design ",
        title: "UI/UX Design",
        description: "I design user-centric, intuitive interfaces that provide excellent experiences for your users, combining beauty with functionality.",
        svg: <svg
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
        </svg>

    },
    {
        imageUrl: "/images/seo.png",
        alt: "Portfolio Image 1",
        title: "SEO Optimization",
        description: "I offer SEO services to boost your site's visibility, making sure it ranks high in search engines and reaches a broader audience.",
        svg: <svg
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
        </svg>

    }

]