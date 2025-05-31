const Contact = () => {
  return (
    <div className="max-w-2xl mt-10 mx-auto px-6 py-10 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <h1 className="text-3xl font-bold text-[#FF5200] mb-6 text-center">Contact Us</h1>

      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
        We'd love to hear from you! Whether you have a question about a menu item, feedback, or anything else —
        our team is ready to answer all your questions.
      </p>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#FF5200] text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition-all"
        >
          Send Message
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        Or email us directly at{" "}
        <a href="mailto:support@yourapp.com" className="text-[#FF5200] underline">
          support@yourapp.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
