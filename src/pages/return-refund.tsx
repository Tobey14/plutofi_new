"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Ensure you have a utility for class merging
import images from "@/assets/images";

const refundPolicies = [
  {
    title: "Order Cancellations & Refunds",
    content: `• Within 24 hours of order placement: Eligible for a 100% refund, provided the order has not been processed.\n
              • Between 24 and 72 hours: Eligible for a refund minus the service fee associated with processing the order.\n
              • After 72 hours (3 days): No refund, as the order is already being processed and prepared for shipping.\n
              �� Note: Special cases may be reviewed on a case-by-case basis, depending on the circumstances.`,
  },
  {
    title: "Returns & Exchanges",
    content: `• We accept returns within 14 days of purchase. Items must be unused and in original packaging.\n
              • The user is responsible for return shipping costs, unless the return is due to a damaged or incorrect item.\n
              • Returns are subject to the store’s return policy. PlutoFi will facilitate the process if the store allows it.\n
              • Items with removed tags or missing original packaging are NOT eligible for return or exchange, even if damaged.\n
              • Exchanges depend on product availability and will be processed if the store permits.\n`
  },
  {
    title: "Damaged, Incorrect, or Missing Items",
    content: `If you receive a damaged, defective, or incorrect product, youmust report the issue within 24 hours of delivery.\n
              Supporting evidence (e.g., photos or videos) may be required.\n
              Depending on the issue, you may be eligible for a replacement, partial refund, or full refund.\n
              Items with removed tags or missing original packaging are not eligible for return or refund.\n`,

  },
  {
    title: "Refund Processing",
    content: `Once approved, refunds will be processed within 5-10 business days to the original payment method.\n
              Service fees or transaction fees may be deducted where applicable.`,
  },
  {
    title: "Non-Refundable Items",
    content: `Some items cannot be returned or refunded, including:
                • Personalized or custom-made items.
                • Perishable goods.
                • Digital or downloadable products.
                • Items marked as &quot;Final Sale&quot;
                • Items with removed tags or missing original packaging.\n
              �� Need Assistance? Contact PlutoFi Support
(support@useplutofi.com) via email or in-app chat for any refund or
return inquiries.`,
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
