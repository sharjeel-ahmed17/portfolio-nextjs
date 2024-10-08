import { useState } from "react"
import toast from "react-hot-toast";


export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');
    const [error, setError] = useState({});
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!name && !email && !message) {
            toast.error('Please Fill Complete details')
            setError({
                name: 'Name is required',
                email: 'Email is required',
                message: 'Message is required',
            });
            return;
        } else {

            toast.success('your message is send to sharjeel ahmed sucessfully')
            setName('')
            setEmail('')
            setMessage('')
        }
    }

    return (
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"

                    />

                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"

                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your message here"

                        defaultValue={""}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}