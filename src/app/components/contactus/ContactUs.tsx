import { FaFacebook } from "react-icons/fa";
import ContactForm from "./ContactForm";


interface IconData {

    icon: any

}
const IconData: IconData[] = [
    { icon: <FaFacebook /> },
    { icon: <FaFacebook /> },
    { icon: <FaFacebook /> }
]

interface LabelData {
    label: string,
    value: string
}
const label: LabelData[] = [
    {
        label: "Phone",
        value: "+92 3411263007"
    },
    {
        label: "Email",
        value: "sharjeelalibari3@gmail.com"
    },
    {
        label: "Address",
        value: "Orangi Town Karachi"
    },

]

export default function ContactUs() {
    return (
        <>
            <div className="pt-24">

                <section id="contact" className="bg-white py-16">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        {/* Section Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                            Get in <span className="text-blue-500">Touch</span>
                        </h2>
                        {/* Contact Form and Info */}
                        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-12">
                            {/* Contact Form */}
                            <ContactForm />
                            {/* Contact Information */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Contact Information
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Feel free to reach out through the form or use the following contact
                                    details to get in touch with me directly.
                                </p>

                                {
                                    label.map((item, index) => {
                                        return (
                                            <PersonalInformation key={index} item={item} />
                                        )
                                    })
                                }


                                {/* <div className="flex justify-center md:justify-start space-x-4">
                                    <a href="#" className="text-gray-600 hover:text-blue-500">
                                        <FaFacebook />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-500">
                                        <FaFacebook />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-500">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-500">
                                        <i className="fab fa-github" />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}



interface IPersonalInform {
    item: {
        label: string,
        value: string
    }
}
function PersonalInformation({ item }: IPersonalInform) {
    const { label, value } = item;
    return (
        <p className="text-gray-900 font-semibold mb-2">
            {label}:{" "}
            <span className="text-blue-500">{value}</span>
        </p>
    )
}