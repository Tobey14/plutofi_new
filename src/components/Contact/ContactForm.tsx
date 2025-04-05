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
import { useState } from "react";


export function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: "tobe",
        lastName: "onuigbo",
        email: "tobeonugbo@gmail.com",
        subject: "yes",
        message: "sample",
      });
    
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          const response = await fetch("/api/send_email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setSuccess(true);
            setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
          } else {
            throw new Error("Email sending failed");
          }
        } catch (error) {
          console.error(error);
        }
    
        setLoading(false);
      };

      
    return (
        <>
            <div className="px-[1rem] md:px-[12rem] items-center my-10">
                <form onSubmit={handleSubmit} className="w-full p-0 m-0 text-center md:text-left order-2 md:order-1 space-y-10">
                    <div className="flex justify-between gap-8">
                        <Input
                            id="First Name"
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
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
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
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
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="
                                    w-full rounded-md border border-gray-300
                                    bg-purple-50 p-3 text-sm
                                    placeholder:text-gray-400 focus:outline-none
                                    focus:ring-2 focus:ring-purple-500 border-none py-8 rounded-xl
                                "
                        />
                    </div>

                    <div className="text-center w-full space-y-2 mt-4 text-xl px-2 md:px-8 py-8">
                        <Button
                            variant="default"
                            className="rounded-xl w-fit px-2 md:px-[8rem] text-xl py-6"
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <SendHorizonal className="ml-2 h-6 w-6" />
                        </Button>
                        {success && <p className="text-green-500 mt-2">Email sent successfully!</p>}

                    </div>
                </form>

            </div>
        </>

    );
}


