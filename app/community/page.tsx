"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function CommunityPage() {
    const socialLinks = [
        { icon: faFacebookF, url: "https://facebook.com" },
        { icon: faTwitter, url: "https://twitter.com" },
        { icon: faInstagram, url: "https://instagram.com" },
        { icon: faLinkedinIn, url: "https://linkedin.com" },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen py-16 px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-green-700">Join Our Community</h2>
                <p className="text-gray-600 mt-3">Connect with fellow travelers, share experiences, and stay updated.</p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white shadow-md border border-gray-200 p-8 flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-6 mt-4">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700 text-2xl">
                                <FontAwesomeIcon icon={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="bg-white shadow-md border border-gray-200 p-8 flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-semibold mb-4">Newsletter Signup</h3>
                    <p className="text-gray-600 mb-4 text-center">Stay updated with the latest trips, offers, and travel news.</p>
                    <div className="flex w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 border border-gray-300 p-3 outline-none"
                        />
                        <button className="bg-green-700 text-white px-6 py-3 ml-2">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-16 text-center">
                <h3 className="text-2xl font-semibold mb-4">Community Forum</h3>
                <p className="text-gray-600">Engage in discussions, share tips, and meet like-minded travelers.</p>
                <button className="mt-6 bg-green-700 text-white px-6 py-3">Go to Forum</button>
            </div>
        </div>
    );
}
