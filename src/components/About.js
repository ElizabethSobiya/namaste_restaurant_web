import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF5200]">
          🍔 Welcome to ZestyEats! 🍟
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          At <span className="font-semibold text-yellow-500">ZestyEats</span>,
          we’re on a delicious mission to bring hot, fresh, and fabulous meals right to your door —
          faster than you can say "extra cheese please!" 🛵💨
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2881&auto=format&fit=crop"
            alt="Delicious Pizza"
            className="rounded-3xl shadow-lg h-80 w-80 mx-auto"
          />
          <div className="text-left px-4">
            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              Why ZestyEats? 😋
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
              <li>🚀 Lightning-fast delivery in 30 minutes or less</li>
              <li>🍕 500+ restaurants at your fingertips</li>
              <li>💸 Daily deals, discounts & crazy combos</li>
              <li>🌙 Midnight munchies? We're open late!</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-100 dark:bg-yellow-800/30 p-6 md:p-8 rounded-2xl shadow-md mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-3 text-orange-700">
            Our Promise 🤝
          </h2>
          <p className="text-md md:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're a foodie, a busy bee, or just someone who forgot to grocery shop
            (we’ve all been there 🫠), we're here to serve up joy in every bite.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 mb-12">
          <h3 className="text-xl font-semibold text-yellow-600">🍽️ Fun Foodie Stats</h3>
          <p className="text-gray-700 dark:text-gray-300">🔥 1M+ orders delivered</p>
          <p className="text-gray-700 dark:text-gray-300">⭐ 4.8 avg customer rating</p>
          <p className="text-gray-700 dark:text-gray-300">🍟 Most ordered item: Loaded Fries</p>
        </div>

        {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-lg transition duration-200">
          🍴 Explore Restaurants Near You
        </button> */}
      </div>
    </div>
  );
}

export default About;
