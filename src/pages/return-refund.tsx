"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Ensure you have a utility for class merging
import images from "@/assets/images";

const refundPolicies = [
  {
    title: "Order Cancellations & Refunds",
    content: `• Within 24 hours of placing an order, you are eligible for a full refund if the order has not been processed.\n
              • After 24 hours, a partial refund may be granted, depending on the order status and store policies.\n
              • Once an order has been shipped, refunds are generally not available, except in special cases (e.g., damaged or incorrect items).`,
  },
  {
    title: "Returns & Exchanges",
    content: `We accept returns within 14 days of purchase. Items must be unused and in original packaging.`,
  },
  {
    title: "Damaged, Incorrect, or Missing Items",
    content: `If you receive a damaged or incorrect item, contact our support team within 7 days for a replacement.`,
  },
  {
    title: "Refund Processing",
    content: `Refunds will be processed within 5-10 business days after approval.`,
  },
  {
    title: "Non-Refundable Items",
    content: `Gift cards, digital products, and perishable goods are non-refundable.`,
  },
];

export default function RefundPolicy() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-gray-800 mt-[8rem]">
      <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 relative text-plutofi">
            Return and Refund Policy
          </h2>
          <img src={images.yellow_line} alt="vector" className="m-0 hidden md:block mt-3 w-fit" />
        </div>
      <p className="text-center text-gray-600 mt-2 text-lg">
        At PlutoFi, we strive to ensure a seamless shopping experience.
        However, we understand that sometimes returns and refunds may be
        necessary. Here’s how our policy works.
      </p>

      <Accordion.Root
        type="single"
        collapsible
        className="mt-6 border-t border-gray-300"
      >
        {refundPolicies.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-300 text-lg"
          >
            <Accordion.Trigger
              className={cn(
                "flex justify-between items-center w-full py-8 text-left font-semibold",
                "hover:text-purple-700 transition-all duration-200"
              )}
            >
              {item.title}
              <ChevronDown className="w-5 h-5 transition-transform duration-200 AccordionChevron" />
            </Accordion.Trigger>
            <Accordion.Content className="text-gray-600 pb-4">
              <p className="whitespace-pre-line">{item.content}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
