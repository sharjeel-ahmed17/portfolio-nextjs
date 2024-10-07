interface BLogData {
    imageUrl: string,
    alt: string,
    title: string,
    description: string,
    url: string
}

export const BlogData: BLogData[] = [
    {
        imageUrl: "/images/html.jpeg",
        alt: "what is html",
        title: "what is html",
        description: "HTML, or Hypertext Markup Language, is a code that defines the structure and meaning of content on a web page",
        url: "/blog/what-is-html"
    },
    {
        imageUrl: "/images/css.jpeg",
        alt: "what is css",
        title: "what is css",
        description: "Why Use CSS? CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.",
        url: "/blog/what-is-css"
    },
    {
        imageUrl: "/images/javascript.avif",
        alt: "what is javascript",
        title: "what is javascript",
        description: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages",
        url: "/blog/what-is-javascript"
    },

]