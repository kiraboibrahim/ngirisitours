import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen">


            {/* Hero Section */}
            <section className="bg-green-700 text-white py-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                    <p className="text-lg opacity-90">
                        We’re here to help you plan your next unforgettable safari experience.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-green-700">Get In Touch</h3>
                        <p className="text-gray-600">
                            Feel free to reach out to us for bookings, inquiries, or custom safari
                            packages.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">Phone:</p>
                                <p className="text-gray-600">+256 700 000000</p>
                            </div>
                            <div>
                                <p className="font-semibold">Email:</p>
                                <p className="text-gray-600">info@triptonicsafaris.com</p>
                            </div>
                            <div>
                                <p className="font-semibold">Address:</p>
                                <p className="text-gray-600">Kampala, Uganda</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Follow Us</h4>
                            <div className="flex space-x-4 text-green-700">
                                <a href="#" className="hover:text-green-900"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                                <a href="#" className="hover:text-green-900"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                                <a href="#" className="hover:text-green-900"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-white shadow-lg  p-8 space-y-6">
                        <div>
                            <label className="block mb-2 font-medium">Full Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300  p-3 focus:ring-2 focus:ring-green-600 outline-none"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Email Address</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300  p-3 focus:ring-2 focus:ring-green-600 outline-none"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Message</label>
                            <textarea
                                className="w-full border border-gray-300  p-3 h-32 focus:ring-2 focus:ring-green-600 outline-none"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3  transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>


        </div>
    );
}
