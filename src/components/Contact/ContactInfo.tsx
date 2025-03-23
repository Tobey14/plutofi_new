import { Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  const contacts = [
    {
      icon: <Phone size={48} className="text-white" />,
      title: "Phone",
      value: "+1 0000000000",
    },
    {
      icon: <Mail size={48} className="text-white" />,
      title: "Email",
      value: "support@useplutofi.com",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-16 my-16">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="bg-[#F5F2FA] p-16 rounded-xl flex flex-col items-center shadow-md w-[24rem]"
        >
          <div className="bg-plutofi w-24 h-24 flex items-center justify-center rounded-full mb-4">
            {contact.icon}
          </div>
          <h3 className="text-lg font-semibold">{contact.title}</h3>
          <p className="text-gray-600">{contact.value}</p>
        </div>
      ))}
    </section>
  );
};

export default ContactInfo;
