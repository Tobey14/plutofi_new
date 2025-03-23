import Head from "next/head";

export default function PrivacyPage() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Plutofi</title>
        <meta name="description" content="Plutofi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/plutofi_icon_dark.svg" />
      </Head>

      <div className="relative w-full min-h-screen bg-gray-100 text-gray-900">
        <div className="relative w-full bg-[#F7E9FF] flex items-center justify-center px-[2rem] md:px-[5rem] py-[10rem] min-h-[30vh] max-h-fit">
          <p className="font-bold text-5xl max-w-5xl">Privacy Policy</p>
        </div>
        <div className="flex flex-col px-8 md:px-24 py-12 text-justify gap-16 ">
          {/* <div className="w-full text-center">
            <h1 className="text-4xl font-bold text-gray-700"></h1>
          </div> */}

          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold">DISCLAIMER FOR CANADIAN USERS</h2>
            <p>
              As defined under Canadian law, Personal Information means information about an identifiable individual
              (“Personal Information”). The disclosures mentioned herein are meant to transparently convey the methods
              of collecting, managing, storing, using, protecting, and sharing Personal Information by users
              (“Privacy Policy”). Users grant their consent to this Privacy Policy through it being readily available
              for viewing in accordance with the Personal Information Protection and Electronic Documents Act
              (“PIPEDA”).
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold">DISCLAIMER FOR EUROPEAN USERS</h2>
            <p>
              <strong>Forms of Payment.</strong> <br />
              We would like to make sure you are fully aware of all of your data protection rights. Every user is
              entitled to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>The right to access:</strong> You have the right to request copies of your personal data. We may
                charge you a small fee for this service.
              </li>
              <li>
                <strong>The right to rectification:</strong> You have the right to request corrections to inaccurate or
                incomplete information.
              </li>
              <li>
                <strong>The right to erasure:</strong> You have the right to request that we delete your personal data
                under certain conditions.
              </li>
              <li>
                <strong>The right to restrict processing:</strong> You have the right to request restrictions on the
                processing of your personal data under certain conditions.
              </li>
              <li>
                <strong>The right to object to processing:</strong> You have the right to object to our processing of
                your personal data under certain conditions.
              </li>
              <li>
                <strong>The right to data portability:</strong> You can request that we transfer your collected data to
                another organization or directly to you under certain conditions.
              </li>
            </ul>
            <p>
              If you make a request, we have one month to respond. To exercise any of these rights, contact us at:
              <a href="mailto:legal@useplutofi.com" className="text-blue-500 underline">
                legal@useplutofi.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold">DISCLAIMER FOR CALIFORNIA USERS</h2>
            <p>
              Your privacy and rights under the California Consumer Privacy Act (CCPA) and the California Online Privacy
              Protection Act (CalOPPA) are important to us. This document outlines how we collect, manage, store, and
              use your Personal Information in our website and mobile app. This Privacy Policy applies to all website
              and mobile app users to disclose the handling of Personal Information as defined under CIV 1798.140(v) of
              the CCPA.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold">PERSONAL INFORMATION COLLECTED</h2>
            <p>
              In the past 12 months, we have or had the intention of collecting the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Identifiers:</strong> Name, postal address, phone number, bank account details, email address,
                and other similar identifiers.
              </li>
              <li>
                <strong>Commercial Information:</strong> Records of products or services purchased or considered.
              </li>
              <li>
                <strong>Geolocation Data:</strong> Physical location or movements based on IP address or GPS data.
              </li>
              <li>
                <strong>Inferences:</strong> Profile reflecting preferences, characteristics, behaviors, and
                aptitudes.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold">GUIDELINES FOR REVIEWS</h2>
            <p>
              Our website and mobile app use cookies to enhance user experience. We and our partners may use tracking
              technologies such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Necessary for website functionality and cannot be disabled.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Enhance performance but are not essential.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Customize ad experiences and target relevant services.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold">COPYRIGHT POLICY</h2>
            <p>
              We may use or disclose your Personal Information for purposes such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing email alerts and communications.</li>
              <li>Improving website and app user experience.</li>
              <li>Legal compliance and law enforcement requests.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold">USER ACCOUNTS</h2>
            <p>
              This section describes your rights regarding how we collect, share, and protect your personal
              information.
            </p>
            <p>
              <strong>Exceptions:</strong> These rights do not apply to aggregated, de-identified, or publicly available
              information.
            </p>
            <p>
              <strong>Access Requests:</strong> You have the right to request details of your collected data twice
              within a 12-month period.
            </p>
            <p>
              <strong>Deletion Requests:</strong> You can request the removal of your personal data unless legal
              exceptions apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
