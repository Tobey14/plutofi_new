"use client";

import * as React from "react";
import { ArrowRight, SendHorizonal } from "lucide-react";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";


import Image from "next/image";
import { CircleCheck } from "lucide-react";
import images from "@/assets/images";


export function ContactForm() {
    return (
        <>
            <div className="px-[2rem] md:px-[12rem] items-center my-10">
                <div className="w-full p-0 m-0 text-center md:text-left order-2 md:order-1 space-y-10">
                    <div className="flex justify-between gap-8">
                        <Input
                            id="First Name"
                            type="text"
                            placeholder="First Name"
                            className="
                                w-full rounded-md border border-gray-300
                                bg-purple-50 p-3 text-sm h-[4rem]
                                placeholder:text-gray-400 focus:outline-none
                                focus:ring-2 focus:ring-purple-500 border-none py-5 rounded-xl
                            "
                        />

                        <Input
                            id="Last Name"
                            type="text"
                            placeholder="Last Name"
                            className="
                                w-full rounded-md border border-gray-300
                                bg-purple-50 p-3 text-sm h-[4rem]
                                placeholder:text-gray-400 focus:outline-none
                                focus:ring-2 focus:ring-purple-500 border-none py-5 rounded-xl
                            "
                        />
                    </div>

                    <div className="">
                        <Input
                            id="Email"
                            type="text"
                            placeholder="Email"
                            className="
                                w-full rounded-md border border-gray-300
                                bg-purple-50 p-3 text-sm h-[4rem]
                                placeholder:text-gray-400 focus:outline-none
                                focus:ring-2 focus:ring-purple-500 border-none py-5 rounded-xl
                            "
                        />
                    </div>

                    <div className="">
                        <Input
                            id="Your Subject"
                            type="text"
                            placeholder="Your Subject"
                            className="
                                w-full rounded-md border border-gray-300
                                bg-purple-50 p-3 text-sm h-[4rem]
                                placeholder:text-gray-400 focus:outline-none
                                focus:ring-2 focus:ring-purple-500 border-none py-5 rounded-xl
                            "
                        />
                    </div>


                    <div className="space-y-2">
                        <textarea
                            id="message"
                            placeholder="Write us a message"
                            rows={6}
                            className="
                                    w-full rounded-md border border-gray-300
                                    bg-purple-50 p-3 text-sm
                                    placeholder:text-gray-400 focus:outline-none
                                    focus:ring-2 focus:ring-purple-500 border-none py-8 rounded-xl
                                "
                        />
                    </div>

                    <div className="text-center w-full space-y-2 mt-4 text-xl px-8 py-8">
                        <Button
                            variant="default"
                            className="rounded-xl w-fit px-[8rem] text-xl py-6"
                        >
                            Send message
                            <SendHorizonal className="ml-2 h-6 w-6" />
                        </Button>
                    </div>
                </div>

            </div>
        </>

    );
}


