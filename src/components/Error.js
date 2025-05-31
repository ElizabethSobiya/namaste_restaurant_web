import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-center px-4">
      <div className="max-w-md">
        <div className="text-7xl mb-4">😵‍💫</div>

        <h1 className="text-5xl font-bold text-[#FF5200] mb-4">Oops!</h1>

        <p className="text-xl text-gray-800 dark:text-gray-200 font-medium mb-2">
          Something went sideways.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          We couldn’t load this page. Maybe the internet elves are on a break. 🧝‍♂️
        </p>

        {/* {err?.status && (
          <div className="text-gray-700 dark:text-gray-300 bg-orange-100 dark:bg-orange-900 border border-orange-300 dark:border-orange-600 rounded-md p-4 mb-4">
            <p className="font-semibold">
              {err.status} - {err.statusText || "Unexpected Error"}
            </p>
          </div>
        )} */}

        <a
          href="/"
          className="inline-block px-6 py-2 text-white bg-[#FF5200] hover:bg-orange-600 rounded-md transition"
        >
          Go Back Home 🏡
        </a>
      </div>
    </div>
  );
};

export default Error;
