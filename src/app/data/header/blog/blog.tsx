interface BLogData {
    imageUrl: string,
    alt: string,
    title: string,
    description: string,
    url: string
}

export const BlogData: BLogData[] = [
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
        alt: "Portfolio Image 1",
        title: "Portfolio Title 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#"
    },
    {
        imageUrl: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        alt: "Portfolio Image 2",
        title: "Portfolio Title 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#"
    },
    {
        imageUrl: "/images/me.jpg",
        alt: "Portfolio Image 1",
        title: "Portfolio Title 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "#"
    },

]