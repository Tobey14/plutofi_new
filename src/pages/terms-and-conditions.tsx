import Head from "next/head";
export default function TermsPage() {
    return (
        <div>
            <Head>
                <title>Terms and Conditions | Plutofi</title>
                <meta name="description" content="Plutofi" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/plutofi_icon_dark.svg" />
            </Head>

            <div className="relative w-full min-h-screen overflow-hidden bg-gray-100 text-gray-800">

                <div className="relative w-full bg-[#F7E9FF] flex items-center justify-center px-[2rem] md:px-[5rem] py-[10rem] min-h-[30vh] max-h-fit">
                    <p className="font-bold text-5xl max-w-5xl">Terms and Conditions</p>
                </div>
                <section className="flex flex-col px-8 md:px-24 py-12 text-justify gap-16">
                    {/* <div className="w-full text-center">
                        <h1 className="text-4xl font-bold text-gray-700"></h1>
                    </div> */}

                    {/* Agreement to Terms */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">AGREEMENT TO TERMS</h2>
                        <p>
                            The Terms of Use Agreement (“Agreement”), created on the Effective Date and last amended on the date above, is made between you (“User,” “You” or “Your”), and PlutoFi, Inc., which includes its affiliated companies, websites, applications, software, and tools (the “Company,” “We,” “Us,” or “Our”).
                        </p>
                    </div>

                    {/* Payment Section */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">PAYMENT</h2>
                        <p>
                            All or a portion of the services offered by the Company on the website are paid in accordance with the terms below:
                        </p>
                        <p>
                            <span className="font-semibold">a) Forms of Payment.</span> We accept payment through the methods offered at the time of purchase...
                        </p>
                        <p>
                            <span className="font-semibold">b) Currency.</span> Payments will be accepted on the website in the currency based on your location...
                        </p>
                        <p>
                            <span className="font-semibold">c) Refund Policy.</span> Except when required by law, payments made by a user are not refundable...
                        </p>
                    </div>

                    {/* Subscriptions Section */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">SUBSCRIPTIONS</h2>
                        <p>
                            If any of the Services offered by Us are available with a paid subscription, you will be billed in advance...
                        </p>
                        <p>
                            <span className="font-semibold">a) Cancellation.</span> You are entitled to cancel a subscription at any time...
                        </p>
                    </div>

                    {/* Access Section */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">ACCESS</h2>
                        <p>
                            Your access to and use of the Website and the Services is conditional upon your acceptance...
                        </p>
                    </div>

                    {/* Prohibited Activities Section */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">PROHIBITED ACTIVITIES</h2>
                        <p>
                            As a user of our Services, whether on the Website or Mobile App, it is prohibited to engage in the following activities:
                        </p>
                        <ul className="list-disc pl-6">
                            <li>Systematically retrieve data...</li>
                            <li>Trick, defraud, or mislead other users...</li>
                            <li>Disparage, tarnish, or otherwise harm...</li>
                        </ul>
                    </div>

                    {/* Guidelines for Reviews */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">GUIDELINES FOR REVIEWS</h2>
                        <p>We may provide you the right to leave a review or rating of the services provided...</p>
                        <ul className="list-disc pl-6">
                            <li>Should have firsthand experience with the person/entity being reviewed.</li>
                            <li>Do not contain any offensive or abusive language.</li>
                            <li>Do not include references to illegal activity.</li>
                        </ul>
                    </div>

                    {/* COPYRIGHT POLICY */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">COPYRIGHT POLICY</h2>
                        <p>
                            <span className="font-semibold">a) Intellectual Property Infringement.</span> <br />
                            It is our duty to respect the intellectual property rights of others. Therefore, it is our policy to respond to any claim that infringes on any trademark, copyright, or other intellectual property protected under law.
                            <br />
                            If you are an owner of any protected intellectual property that you feel is being used without your authorization, you must submit notice to us by any of the contact details mentioned herein and include a detailed description of the alleged infringement.
                            <br />
                            If any request is made, and it is determined that you are not the owner of the intellectual property or do not have the authority to act on the owner&apos;s behalf, you may be held accountable for damages which may also include costs related to attorneys&apos; fees for such misrepresentation.
                            <br />
                            <span className="font-semibold">b) DMCA Notice and DMCA Procedure for Copyright Infringement Claims.</span> <br />
                            You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Company with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
                            <br />i. An electronic or physical signature of the copyright owner or a person authorized to act on behalf of the owner of the copyrighted work;
                            <br />ii. A description of the copyrighted work that you claim has been infringed, including the URL(s) where the copyrighted work exists or a copy of the copyrighted work;
                            <br />iii. Your contact details including a personal name, address, phone number, and an e-mail address;
                            <br />iv. A statement that the copyright infringement is not authorized and that the request to remove the copyrighted work is in good faith; and
                            <br />v. A statement by you, with language that includes “under penalty of perjury,” that the information included in the infringement removal is accurate.
                            <br />
                            Upon receipt of a copyright infringement notification, we will take whatever steps are required to remove the copyrighted content from the Website or the Services.
                        </p>
                    </div>

                    {/* INTELLECTUAL PROPERTY */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">INTELLECTUAL PROPERTY</h2>
                        <p>
                            Except as otherwise indicated, all source coding, databases, functionalities, software, graphic designs, and media of any kind (e.g. audio, video, text, photos, etc.), content, trademarks, service marks, logos, and copyrights are considered to be intellectual and proprietary information (“intellectual property”).
                            <br />
                            Such intellectual information is under our ownership and protected by local, state, national, and international laws and will be defended. No intellectual property is permitted to be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for commercial purposes without our express prior written permission.
                        </p>
                    </div>

                    {/* USER OBLIGATIONS */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">USER OBLIGATIONS</h2>
                        <p>
                            You, as a user of the website or any of its services, agree to the following:
                            <br />i. Any information used for registration purposes, if required, must be submitted in an accurate and completed manner;
                            <br />ii. If any information should change regarding your account, you agree to change it in a timely fashion;
                            <br />iii. You have the legal capacity to understand, agree with, and comply with this Agreement;
                            <br />iv. That you are not considered a minor in the jurisdiction where you reside or are accessing the Website or its Services;
                            <br />v. That you will not access the website or its services through the use of bots, scripts, or any other use than the traditional manner as is intended; and
                            <br />vi. That you will use the Website and its Services in an authorized and legal manner in accordance with this Agreement.
                            <br />
                            In regard to any of the information submitted by you, if it should be deemed inaccurate, out of date, or incomplete, we reserve the right to terminate your access to the Website or account and any future intended use.
                        </p>
                    </div>

                    {/* USER ACCOUNTS */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">USER ACCOUNTS</h2>
                        <p>
                            If our Website allows the creation of a user account of any type, you agree to be responsible for safeguarding its information including account data, connected e-mails, passwords, and any other personal information located therein. If you are made aware of any breach of unauthorized use of the account, to notify us as soon as possible. Furthermore, you agree not to disclose any password created with any third party other than secured services used to assist with saving passwords on your behalf.
                            <br />
                            If the creation of a username is allowed when making an account, such username must be appropriate for public viewing and not violate any trademark, copyright, or other protected names or marks.
                        </p>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">SOCIAL MEDIA</h2>
                        <p>
                            As part of the Website&apos;s functionality, you may be able to link and connect a social media profile with your account for sharing information, logging into the Website, or for any other reason that is in accordance with the terms of this Agreement and the social media Company&apos;s terms of use (“social media profile”).
                            <br />
                            If connecting a social media profile with the Website, it is acknowledged that you may be required to disclose its login information or grant us access.
                            <br />
                            Such disclosure or access is within the terms of use of the social media profile and that you understand that:
                            <br />i. We may access, make available, and store (if applicable) any content that you have provided to and stored in your social media profile so that it is available on and through the Website via your account, including without limitation any contacts;
                            <br />ii. We may submit and receive data, which may include personal information, to your social media profile upon its connection to the Website;
                            <br />iii. That you have the ability, at any time, to disable the connection between the Website and the social media profile; and
                            <br />iv. That the relationship between you and your social media profile is governed solely by its terms of use and in no way does this Agreement amend your rights and responsibilities unless otherwise stated.
                            <br />
                            Due to the policies commonly mentioned in a social media company&apos;s term of use, we make no effort to review any content produced through the connection of a social media profile unless notified by other users, a third party, or another event that triggers a review of the account.
                        </p>
                    </div>

                    {/* THIRD-PARTY CONTENT */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-lg font-semibold">THIRD PARTY WEBSITE AND CONTENT</h2>
                        <p>
                            Our Website or Services may contain links to third-party Websites or Services that are not owned or controlled by us. Therefore, we assume no responsibility for the content, privacy policies, terms of use, practices, services, experiences, activities, or any other acts by third parties. You acknowledge that if you are to be re-directed or forwarded to such third-party website, you hold us harmless and free of liability for any action that should occur on such websites, which may or may not include damages, losses, or any other claims.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* ADVERTISING */}
                        <div className="flex flex-col gap-8">
                            <p className="font-semibold text-lg">ADVERTISING</p>
                            <p className="leading-relaxed">
                                In the event that we host, display, recommend, or link to websites or services in exchange for a fee (“Advertisements”), it shall be known that such websites and services are often not known to us and are provided via advertisement networks based on user data. We do not own or control such advertisements and assume no responsibility for the content, privacy policies, terms of use, practices, services, experiences, activities, or any other acts. Our only affiliation with such advertisements is the payment per display, clicks, or any other monetary benefit in accordance with its terms and conditions or affiliate terms.
                                <br />
                                Any advertisements used are subject to the Digital Millennium Copyright Act (“DMCA”) policies.
                                <br />
                                There will be no refund or compensation related to a DMCA takedown of said advertisements. Our relationship with advertisers begins and ends with us providing space for the placement of such advertisements.
                            </p>
                        </div>

                        {/* SITE MANAGEMENT */}
                        <div className="flex flex-col gap-8">
                            <p className="font-semibold text-lg">SITE MANAGEMENT</p>
                            <p className="leading-relaxed">
                                To ensure the best experience for all users of our Website and Services, we reserve the right, in our sole discretion, to do the following:
                                <br />
                                i. To monitor our Website, Services, and any other content for violations by users of this Agreement.
                                <br />
                                ii. To take appropriate actions against our users, including legal action, for those who may have violated this Agreement or have attempted to defraud or cause harm to other users.
                                <br />
                                iii. To refuse, restrict, limit, disable, or remove any and all files and content which, due to excessive size limits or other properties, are burdensome to our systems or other users.
                                <br />
                                iv. To otherwise manage our Website and Services in such a way as to protect our rights and property and to encourage the optimal running of said Websites and Services.
                            </p>
                        </div>

                        {/* PRIVACY POLICY */}
                        <div className="flex flex-col gap-8">
                            <p className="font-semibold text-lg">PRIVACY POLICY</p>
                            <p className="leading-relaxed">
                                Your access to and use of our Website or Services is conditional upon your acceptance of our privacy policy. Our privacy policy describes our rules and procedures on the collection, use, and disclosure of your personal information and details your privacy rights and how the law protects you and such data. It is recommended for all users to read the privacy policy to know their rights. Our privacy policy can be found at the following URL:
                                <a href="https://www.useplutofi.com/privacy" className="text-blue-600 underline">www.useplutofi.com/privacy</a>.
                                We maintain the right to store certain data that you have transmitted by the use of the Website or any of our Services. You are solely responsible for the data you transmit and how it relates to any activity you have undertaken when using the Website and any of its Services. Therefore, you agree that we have no liability to you for any loss, breach, or corruption of any data and hereby waive any right of action against us that may or may not arise from such loss, breach, or corruption.
                            </p>
                        </div>

                        {/* TERMINATION */}
                        <div className="flex flex-col gap-8">
                            <p className="font-semibold text-lg">TERMINATION</p>
                            <p className="leading-relaxed">
                                We may terminate or suspend your account for any reason and at our sole discretion. If your account is suspended or terminated, we may or may not provide prior notice. Upon termination of your account, your access to the Website and/or Services will cease immediately.
                                <br />
                                If you wish to terminate your relationship with us, such termination can be made by simply discontinuing your use of the website and its services.
                            </p>
                        </div>

                        {/* GOVERNING LAW */}
                        <div className="flex flex-col gap-8">
                            <p className="font-semibold text-lg">GOVERNING LAW</p>
                            <p className="leading-relaxed">
                                This Agreement, including your use and access to the Website and Services, shall be governed by the laws of the State of North Carolina, without regard to its conflict laws. Your use of this Website, Services, and any Mobile App may be subject to other local, state, national, and international laws.
                            </p>
                        </div>

                        {/* DISPUTE RESOLUTION */}
                        <div className="flex flex-col gap-8">
                            <p className="font-semibold text-lg">DISPUTE RESOLUTION</p>
                            <p className="leading-relaxed">
                                If you should raise any dispute about the Website, its content, or any of the Services offered, it is required first to attempt to resolve the dispute formally by contacting us.
                                <br />
                                <span className="font-semibold">a) Mediation.</span> <br />
                                If a dispute cannot be agreed upon by the parties, it shall be moved to mediation to be conducted in accordance with the procedures of the United States Arbitration & Mediation. All costs related to said mediation shall be shared equally by both parties.
                                <br />
                                <span className="font-semibold">b) Arbitration.</span> <br />
                                If the dispute cannot be agreed upon during the mediation period, then the dispute will be submitted to binding arbitration in the jurisdiction of governing law. Company maintains the right to bring proceedings regarding the substance of any dispute in the courts of the country where the Company is located.
                            </p>
                        </div>

                        {/* ELECTRONIC MEANS */}
                        <div className="flex flex-col gap-8">
                            <p className="font-semibold text-lg">ELECTRONIC MEANS</p>
                            <p className="leading-relaxed">
                                When accessing the Website or any of its Services, sending e-mails, online forms, e-signatures, or any type or kind of electronic records or communication, you consent that all agreements, notices, disclosures, and other communications we provide to you in such manner satisfies any legal requirement that such communication should be in writing. You hereby agree that the use of such electronic means will be regarded as sufficient and be viewed as the same as its physical counterpart.
                            </p>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    );
}
