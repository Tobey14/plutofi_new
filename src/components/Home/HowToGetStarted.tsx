import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AppButtons from "../common/AppButtons";

const steps = [
    {
        title: "Download & Sign Up",
        description:
            "Shop Global, Pay Local. Get started in seconds! Download PlutoFi from the Apple App Store or Google Play Store, sign up with your email and phone number, and you're in!",
        number: 1,
    },
    {
        title: "Browse & Shop",
        description:
            "Explore top US & international stores! Browse our featured store list or search for your favorite brands.",
        number: 2,
    },
    {
        title: "Build Your Cart",
        description:
            "One cart, endless choices! Add items from multiple stores and combine them into your PlutoFi cart for a seamless checkout experience.",
        number: 3,
    },
    {
        title: "Pay Your Way",
        description:
            "No borders, no limits! Pay securely in your local currency using your debit card, bank transfer, USSD, or other convenient payment methods—all processed through our safe & secure payment gateway.",
        number: 4,
    },
    {
        title: "We Ship, You Chill!",
        description:
            "Sit back and relax! Your orders are shipped via trusted courier partners and delivered within 10-14 days—straight to your doorstep!",
        number: 5,
    },
];

export default function HowToGetStarted() {
    return (
        <section className="py-10 px-[1rem] md:px-[5rem]">
            <h2 className="text-3xl font-bold text-center mb-8">How to Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
                {steps.map((step) => (
                    <Card key={step.number} className="relative border border-yellow-400 shadow-md py-5 rounded-2xl">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex justify-between">
                                <h3 className="text-2xl font-semibold text-plutofi">{step.title}</h3>
                                <Badge className="bg-plutofi text-white text-lg w-8 h-8 flex items-center justify-center rounded-full">
                                    {step.number}
                                </Badge>
                            </div>
                            <p className="text-gray-700 text-md mt-2">{step.description}</p>
                        </CardContent>
                    </Card>
                ))}

                <div className="flex items-end">
                    <AppButtons />
                </div>

            </div>
        </section>
    );
}
