"use client";
import React, { useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface FormData {
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    currency: string;
    amount: string;
    description: string;
}

export default function PayUsPage() {
    const [step, setStep] = useState<number>(1);
    const [form, setForm] = useState<FormData>({
        salutation: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        currency: "USD",
        amount: "",
        description: "",
    });

    const updateField = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const next = () => setStep(step + 1);
    const back = () => setStep(step - 1);

    const stepLabels = ["Personal Info", "Payment Details", "Confirm"];

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen py-16 px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-green-700">Pay Us Here</h2>
                <p className="text-gray-600 mt-3">Complete the steps below to submit a payment.</p>
            </div>

            {/* Steps Container */}
            <div className="max-w-2xl mx-auto bg-white shadow-md border border-gray-200 p-8">
                {/* Step Indicators */}
                <div className="flex items-start justify-between mb-10 relative">
                    {stepLabels.map((label, index) => (
                        <div key={index} className="flex flex-col items-center relative" style={{ width: `${100 / stepLabels.length}%` }}>
                            {/* Circle */}
                            <div className={`w-10 h-10 flex items-center justify-center text-sm font-bold border-2 rounded-full z-10 bg-white ${step >= index + 1 ? "bg-green-700 text-white border-green-700" : "border-gray-400 text-gray-500"}`}>
                                {index + 1}
                            </div>
                            {/* Label */}
                            <p className={`mt-3 text-sm font-medium text-center px-2 ${step === index + 1 ? "text-green-700" : "text-gray-400"}`}>
                                {label}
                            </p>
                        </div>
                    ))}

                    {/* Connecting Lines */}
                    <div className="absolute top-5 left-0 right-0 flex items-center justify-between px-[10%]">
                        {stepLabels.slice(0, -1).map((_, index) => (
                            <div
                                key={index}
                                className={`h-[2px] flex-1 ${step > index + 1 ? "bg-green-700" : "bg-gray-300"}`}
                                style={{
                                    marginLeft: index === 0 ? '0' : '5%',
                                    marginRight: '5%'
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* STEP 1 */}
                {step === 1 && (
                    <div className="space-y-6">
                        <div>
                            <label className="block mb-2 font-medium">Salutation</label>
                            <select
                                title="Select Salutation"
                                name="salutation"
                                value={form.salutation}
                                onChange={updateField}
                                className="w-full border border-gray-300 p-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
                            >
                                <option value="">Select</option>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Dr">Dr</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">First Name</label>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={updateField}
                                className="w-full border border-gray-300 p-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">Last Name</label>
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={updateField}
                                className="w-full border border-gray-300 p-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
                                placeholder="Doe"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={updateField}
                                className="w-full border border-gray-300 p-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">Phone Number</label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={updateField}
                                className="w-full border border-gray-300 p-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
                                placeholder="+256 ..."
                            />
                        </div>
                        <button
                            onClick={next}
                            className="w-full bg-green-700 text-white py-3 mt-4 flex items-center justify-center gap-2 hover:bg-green-800 transition font-medium"
                        >
                            Next <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <div className="space-y-6">
                        <div>
                            <label className="block mb-2 font-medium">Currency</label>
                            <select
                                name="currency"
                                value={form.currency}
                                onChange={updateField}
                                className="w-full border border-gray-300 p-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
                                title="Select Currency"
                            >
                                <option value="USD">USD</option>
                                <option value="UGX">UGX</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">Amount</label>
                            <input
                                name="amount"
                                type="number"
                                value={form.amount}
                                onChange={updateField}
                                className="w-full border border-gray-300 p-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition"
                                placeholder="100"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">Description</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={updateField}
                                className="w-full border border-gray-300 p-3 h-28 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition resize-none"
                                placeholder="Describe what the payment is for..."
                            />
                        </div>
                        <div className="flex justify-between mt-6 gap-4">
                            <button
                                onClick={back}
                                className="bg-gray-300 text-gray-800 py-3 px-6 flex items-center gap-2 hover:bg-gray-400 transition font-medium"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} /> Back
                            </button>
                            <button
                                onClick={next}
                                className="bg-green-700 text-white py-3 px-6 flex items-center gap-2 hover:bg-green-800 transition font-medium"
                            >
                                Next <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                    <div className="space-y-6 text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-5xl mb-4" />
                        <h3 className="text-2xl font-semibold">Confirm Your Details</h3>
                        <p className="text-gray-600">Review your information before submitting.</p>

                        <div className="text-left space-y-2 mt-6 bg-gray-50 p-6 rounded border border-gray-200">
                            {Object.entries(form).map(([key, value]) => (
                                <p key={key} className="text-gray-700 flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                    <span className="text-gray-900">{value || "—"}</span>
                                </p>
                            ))}
                        </div>

                        <div className="flex justify-between mt-8 gap-4">
                            <button
                                onClick={back}
                                className="bg-gray-300 text-gray-800 py-3 px-6 flex items-center gap-2 hover:bg-gray-400 transition font-medium"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} /> Back
                            </button>
                            <button className="bg-green-700 text-white py-3 px-6 hover:bg-green-800 transition font-medium">
                                Submit Payment
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}