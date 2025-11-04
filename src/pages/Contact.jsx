export default function Contact() {
  return (
    <section className="bg-orange-50 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Contact Us 🍴
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have a recipe suggestion or feedback? We’d love to hear from you!
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for contacting us!");
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <textarea
            placeholder="Your Message"
            required
            rows="4"
            className="md:col-span-2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-500">
          <p>📧 contact@tastybite.com</p>
          <p>📍 Ahmedabad, India</p>
          <p>⏰ Mon–Sat, 9 AM – 6 PM</p>
        </div>
      </div>
    </section>
  );
}