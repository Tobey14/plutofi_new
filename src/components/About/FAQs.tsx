"use client";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion"; // Using Radix UI Accordion
import { PlusCircle, Minus, ChevronRight, MinusCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { div } from "framer-motion/client";

type FAQCategory = "Getting Started" | "Shopping & Payments" | "Shipping & Delivery" | "Returns & Refunds" | "Account & Support";

type FAQItem = {
    question: string;
    answer: React.ReactNode;
};

const faqData: Record<FAQCategory, FAQItem[]> = {
    "Getting Started": [
        { question: "What is PlutoFi?", answer: "PlutoFi is a one-stop e-commerce platform that allows African consumers to shop from US and global stores, pay in their local currency, and receive secure deliveries within 10-14 days." },
        { question: "How do I start using PlutoFi?", answer: "Simply download the PlutoFi app from the Apple App Store or Google Play Store, sign up with your email and phone number, and start shopping!" },
        { question: "Do I need a US address to shop?", answer: "No! PlutoFi provides a seamless shopping and shipping solution—your items will be delivered directly to your local address." },
    ],
    "Shopping & Payments": [
        // { question: "Can I shop from multiple stores at once?", answer: "Yes! You can add items from different stores to your PlutoFi cart and check out all at once." },
        { question: "Can I shop from multiple stores at once?", answer: "Yes! You can add items from different stores to your PlutoFi cart and check out all at once." },

        {
            question: "What payment methods are supported?", answer: <div>We support multiple payment options, including: <br />
                <ul className="">
                    <li>
                        ✔️ Debit/Credit Cards
                    </li>
                    <li>
                        ✔️ Bank Transfers
                    </li>
                    <li>
                        ✔️ USSD Payments
                    </li>
                    <li>
                        ✔️ Mobile Wallets
                    </li>
                    <li>
                        ✔️ Other secure local payment methods
                    </li>
                </ul>

            </div>
        },
        { question: "Are there any hidden fees?", answer: "No, PlutoFi is transparent with pricing. You’ll see the full cost—including product price, shipping, and fees—before checkout." },
        { question: "Can I pay in US dollars or another currency?", answer: "PlutoFi primarily allows transactions in local currency, but select users may have the option to pay in USD." },
        {
            question: "What if my payment fails?", answer: <div>If your payment fails: <br />
                <ul className="list-disc">
                    <li>
                        Check your bank balance and network connection
                    </li>
                    <li>
                        Check that your card or payment method supports international transactions
                    </li>
                    <li>
                        Contact PlutoFi support for assistance
                    </li>
                </ul>

            </div>
        },
    ],
    "Shipping & Delivery": [
        { question: "How long does delivery take?", answer: "Orders are typically delivered within 10-14 days via our trusted courier partners" },
        { question: "Can I track my order?", answer: "Yes! Once your order is shipped, you’ll receive a tracking number to monitor your delivery status in real time." },
        { question: "What if my package is delayed?", answer: "While we aim for timely deliveries, delays may occur due to customs or logistics issues. If your package is delayed, our support team will assist you in tracking your order." },
        { question: "How much does shipping cost?", answer: "Shipping fees vary based on weight, store location, and delivery method. PlutoFi provides an estimated shipping cost at checkout." },
        // { question: "Can I choose my shipping method?", answer: "Yes! PlutoFi offers multiple shipping options, including standard and express delivery." },
        { question: "Do I need to pay customs duties or import taxes?", answer: "Customs duties depend on your country's regulations. PlutoFi will inform you if any additional fees apply." },
    ],
    "Returns & Refunds": [
        { question: "Can I return or exchange an item?", answer: "Returns and exchanges depend on the store’s policy. If a return is accepted, PlutoFi will guide you through the process." },
        { question: "What if I receive a damaged or wrong item?", answer: "Contact our customer support immediately, and we’ll assist in resolving the issue with the seller" },
        {
            question: " Can I get a refund if I cancel my order?", answer: <div>Yes! Refunds depend on when you cancel: <br />
                <ul className="">
                    <li>
                        • Within 24 hours of order placement → 100% refund
                    </li>
                    <li>
                        • Between 24 and 72 hours → Refund minus service fee
                    </li>
                    <li>
                        • After 72 hours (3 days) → No refund
                    </li>
                    <li>
                        • Other refund cases will be handled on a case-by-case basis
                    </li>

                </ul>

            </div>

        },
        { question: "What if the item I want is out of stock?", answer: "If an item is out of stock, PlutoFi will notify you and offer alternatives where possible." },
    ],

    "Account & Support": [
        { question: "Can I return or exchange an item?", answer: "Returns and exchanges depend on the store’s policy. If a return is accepted, PlutoFi will guide you through the process." },
        { question: "What if I receive a damaged or wrong item?", answer: "Contact our customer support immediately, and we’ll assist in resolving the issue with the seller" },
        {
            question: " Can I get a refund if I cancel my order?", answer: <div>Yes! Refunds depend on when you cancel: <br />
                <ul className="">
                    <li>
                        • Within 24 hours of order placement → 100% refund
                    </li>
                    <li>
                        • Between 24 and 72 hours → Refund minus service fee
                    </li>
                    <li>
                        • After 72 hours (3 days) → No refund
                    </li>
                    <li>
                        • Other refund cases will be handled on a case-by-case basis
                    </li>

                </ul>

            </div>

        },
        { question: "What if the item I want is out of stock?", answer: "If an item is out of stock, PlutoFi will notify you and offer alternatives where possible." },
    ],
};

export default function FAQSection() {
    const [activeCategory, setActiveCategory] = useState<FAQCategory>("Getting Started");
    const [openItem, setOpenItem] = useState<string | null>(null); // Track the open accordion item

    const toggleAccordion = (question: string) => {
        setOpenItem((prev) => (prev === question ? null : question)); // Close previous if the same question is clicked
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            {/* Sidebar for Desktop */}
            <aside className="flex md:flex-col space-x-4 md:space-x-0 items-center md:items-start md:space-y-4">
                {Object.keys(faqData).map((category) => (
                    <div onClick={() => setActiveCategory(category as FAQCategory)} className={`flex justify-between items-center w-fit md:w-[20rem] p-4 ${activeCategory === category ? "text-purple-600 bg-[#F5F2FA]" : "text-gray-700"}`} key={category}>
                        <button
                            className={`text-left font-bold transition-all`}
                        >
                            {category}
                        </button>

                        <ChevronRight className="hidden md:block" />
                    </div>

                ))}
            </aside>

            <div className="md:col-span-2">
                <Accordion.Root type="single" collapsible className="space-y-8">
                    {faqData[activeCategory].map((faq, index) => (
                        <Accordion.Item key={index} value={faq.question} className="border-b">
                            <Accordion.Header>
                                <Accordion.Trigger
                                    className="flex justify-between items-center py-3 w-full text-left cursor-pointer"
                                    onClick={() => toggleAccordion(faq.question)}
                                >
                                    <span className="font-bold">{faq.question}</span>
                                    {openItem === faq.question ? (
                                        <MinusCircle className="w-5 h-5 text-gray-500 bg-[#F5F2FA] rounded-full" />
                                    ) : (
                                        <PlusCircle className="w-5 h-5 text-gray-500 bg-[#F5F2FA] rounded-full" />
                                    )}
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className={`text-gray-600 px-4 pb-3 ${openItem === faq.question ? "block" : "hidden"}`}>
                                {faq.answer}
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </div>
    );
}
