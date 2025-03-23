import images from "@/assets/images";

export default function FeaturesSection() {
    const features = [
      {
        image: images.about1, // Replace with actual image paths
        text: "Browse and shop from multiple international stores.",
      },
      {
        image: images.about2,
        text: "Pay securely in your local currency via debit card, bank transfer, USSD & more.",
      },
      {
        image: images.about3,
        text: "Get your orders delivered to your doorstep in just 10-14 days.",
      },
    ];
  
    return (
      <section className="bg-[#FAF7FF] py-12 px-[2rem] md:px-[5rem] ">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <img src={feature.image} alt="Feature" className="" />
              </div>
              <p className="mt-4 text-lg max-w-xs">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  