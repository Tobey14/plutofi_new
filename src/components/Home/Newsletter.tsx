import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("sureboytobi@gmail.com");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();


    setTimeout(() => {
      setResponse(data.message || "Something went wrong");
      setLoading(false);
      setEmail("");
    }, 2000)

    setTimeout(() => {
      setResponse('')
    }, 5000)
  };
  return (
    <section className="bg-purple-700 py-6 px-4 flex flex-col md:flex-row items-center justify-between rounded-lg w-full max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-white text-lg font-semibold">Join our newsletter</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="relative w-full md:w-2/3 mt-4 md:mt-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full py-3 pl-4 pr-28 bg-purple-500 text-white placeholder-white rounded-full focus:outline-none"
        />
        <button type="submit" disabled={loading} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 font-semibold px-6 py-2 rounded-full">
          {loading? 'Loading...' : response ? response : "Join Now"}
        </button>
        {/* {response && <p>{response}</p>} */}
      </form>
    </section>
  );
}
