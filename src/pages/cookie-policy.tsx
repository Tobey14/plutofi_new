"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Ensure you have a utility for class merging
import images from "@/assets/images";



export default function RefundPolicy() {
  return (
    <section className="mx-auto py-12 px-[2rem] md:px-[5rem] text-gray-800 mt-[5rem]">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mt-4 relative text-plutofi">
          Cookie Policy
        </h2>
        <img src={images.yellow_line} alt="vector" className="m-0 hidden md:block mt-3 w-fit" />
      </div>

      <p className="text-left text-gray-600 mt-8 text-lg">
        At PlutoFi, we are committed to user privacy and data protection. This Cookie and Similar Technologies Policy is specifically about the tracking technologies embedded on our website and mobile applications to process personal data from end users. It supplements our privacy policy and describes how we handle personal information that we collect through our digital platforms. It informs users about our data collection practices, provides option for consent and control over personal data andensures compliancev with legal standards
      </p>

      <p className="text-left text-gray-600 mt-8 text-lg">
        Cookies are small text files stored on a user’s device (such as a computer, smartphone, or tablet) through the web browser. It allows web servers to collect and remember information about the user’s interactions with the website. For example, if you add items to your shopping cart on our platform but leave without checking out, cookies ensure those items remain in your cart when you return. They enhance user experience, track browsing behavior, and enable functionalities such as remembering login credentials and preferences such as language settings, themes, and layout choices, ensuring a personalized experience upon return visits. These cookies are set by us. We also use third-party cookies to Conduct research and diagnostics to improve PlutoFi’s content, products and services and to gather data for tracking and online advertising purposes.       </p>

      <p className="text-left text-gray-600 mt-8 text-lg">
        We use cookies and other similar technologies to identify your browser or device (to recognize you the next time you sign-in to use our Service. As a result, the information, which you have earlier entered in certain fields on the Service may automatically appear the next time you use our Service). We use them to gather information about your interests, better understand you and tailor your experience each time you visit.       </p>

      <p className="text-left text-gray-600 mt-8 text-lg">
        We use Cookies and similar technologies primarily for functionality enhancement, improving user experience, optimizing performance, ensuring security, detecting fraud, facilitating targeted advertising, and conducting research and diagnostics to improve Plutofi's content, products, and services.
        Cookies are grouped into essential, functional, marketing, third-party, statistics and preference cookies.
      </p>

      <p className="text-left text-gray-600 mt-8 text-lg">
        Essential cookies are strictly necessary cookies. They enable website functionality and are automatically enabled when you use the Site. It ensures website functionality and is automatically enabled when you use the Site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information.
      </p>

      <p className="text-left text-gray-600 mt-8 text-lg">
        Functional or preference cookies are designed to remember specific user preferences and actions, they allow users to set preferences regarding the website’s interface, such as display size, themes, or layout configurations, for a more personalized and efficient browsing experience. They help maintain the user’s login status as they navigate through different pages of the website. This means that once a user logs in, they do not need to re- enter their credentials on every page, which streamlines the browsing process. They are used for Language Preferences. They store information about the user’s preferred language settings. We use them for Session management: They help manage user sessions effectively by keeping track of items in shopping carts or other temporary selections made during a single visit to the site.      </p>




      <p className="text-left text-gray-600 mt-8 text-lg">
        Marketing, advertising or tracking cookies are primarily used to track users’ online behavior and show them personalized ads based on their interests. Our website displays advertisements. These cookies are used to personalize the advertisements that we show to you so that they are meaningful to you. They also help us keep track of the efficiency of our ad campaigns.      </p>


      <p className="text-left text-gray-600 mt-8 text-lg">
        Third-party cookies are not placed by us, instead, they are placed by third parties that provide services to us and/or to you. Third-party Cookies may be used by advertising services to serve up tailored advertising to you on Our Site, or by third parties providing analytics services to us.      </p>



      <p className="text-left text-gray-600 mt-8 text-lg">
        <span className="font-bold">Statistics cookies:</span> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement.      </p>


      <p className="font-bold text-xl my-4">
        HOW CAN YOU MANAGE YOUR COOKIES?
      </p>

      <p className="">Proper management of cookies can lead to a better user experience, and should you decide to change your preferences through your browsing session, you can enable or disable Cookies or choose to withdraw your consent entirely.
        When you visit the website, you will encounter a cookie banner informing you about the type of cookie used on the website and requesting your consent to store these cookies on your device. You have options to accept all cookies, reject non-essential cookies, or customize your preferences based on cookie categories.

        <br /> <br />In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies.
        ·  Managing cookies in your browser
        ·  Managing similar technologies in your apps and devices

        <br /><br />Most browsers allow you to manage how cookies are set and used as you browse, and how to clear cookies. The methods for doing so vary from browser to browser. (Obtain up to date information about blocking and deleting cookies on your preferred browser).
        <br /><br />Note that blocking all cookies will impact the usability of many services. If you block cookies, you will not be able to use all the features on our Service.
        <br /><br />Mobile applications may not use cookies in the same way as web browsers, although they can still utilize similar tracking technologies, such as local storage or session storage.
        <br /><br />Most mobile devices and applications allow you to manage how similar technologies, such as unique identifiers used to identify an app or device, are set and used. For example, the Advertising ID on Android devices or Apple’s Advertising Identifier can be managed in your device’s settings, while app-specific identifiers may typically be managed in the app’s settings</p>


      <p className="font-bold text-xl my-4">
        Limiting interest-based advertising
      </p>
      <p className="">
        We, our service providers, and our third-party advertising partners may collect and use your personal information for advertising purposes. Interest-based ads are sometimes referred to as personalized or targeted ads. We show interest-based ads to display features, products, and services that might be of interest to you. Our third-party advertising partners may use cookies and similar technologies to collect information about your interaction and preferences and use that information to serve online ads that they think will interest you. We may also share information about our users with these companies to facilitate interest-based advertising to those or similar users on third-party platforms.
        <br /><br />
        In providing interest-based ads, we follow the Digital Advertising Alliance’s Self-Regulatory Principles for Online Behavioral Advertising. You can limit the use of your information for interest-based advertising on your mobile device settings. On IOS, go to your Settings {' >'} Select Privacy {' >'} Select Tracking {' >'} Disable the "Allow Apps to Request to Track" setting. On your Android device Open your Google Settings app {' >'} Ads {' >'} Enable "opt out of interest-based advertising You can also manage your advertising preferences for some of the third parties we work with to serve advertisements across the Internet. Many browsers accept cookies by default until you change your settings. Please note that if you set your browser to disable cookies, the Service may not work properly.
      </p>

      <p className="font-bold text-xl my-4">CHANGES TO THIS COOKIE POLICY</p>


      <p className="">
        We may alter this Cookie Policy at any time. If we do so, details of the changes will be highlighted at the top of this page. Any such changes will become binding on you on your first use of Our Site after the changes have been made. You are therefore advised to check this page from time to time.
        In the event of any conflict between the current version of this Cookie Policy and any previous version(s), the provisions current and in effect shall prevail unless it is expressly stated otherwise.
        <br /><br />Any modifications to this Cookie and Similar Technologies Policy will be effective upon us posting the modified version (or as otherwise indicated at the time of posting).
      </p>

      <p className="font-bold text-xl my-4">CONTACT US</p>

      <p className="">
        If you have any questions or comments about our Cookie Policy or the terms mentioned, you may contact us at any time: support@useplutofi.com.
      </p>


    </section>
  );
}
