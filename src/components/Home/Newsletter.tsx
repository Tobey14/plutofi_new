export default function Newsletter() {
  return (
    <section className="bg-purple-700 py-6 px-4 flex flex-col md:flex-row items-center justify-between rounded-lg w-full max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-white text-lg font-semibold">Join our newsletter</h2>

      {/* Form */}
      <div className="relative w-full md:w-2/3 mt-4 md:mt-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full py-3 pl-4 pr-28 bg-purple-500 text-white placeholder-white rounded-full focus:outline-none"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 font-semibold px-6 py-2 rounded-full">
          Join Now
        </button>
      </div>
    </section>
  );
}
