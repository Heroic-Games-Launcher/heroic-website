export const metadata = {
  title: "Donate",
};

const donate = [
  {
    name: "Github Sponsor",
    description:
      "Support us with a one-time or recurring donation through GitHub.",
  },
  {
    name: "Github",
    description:
      "Activate a monthly subscription on Patreon to support us and get rewards.",
  },
  {
    name: "Github",
    description:
      "Support the project by offering us a coffee. Just like that, fast and simple!",
  },
];

export default function Donate() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl dark:text-white">Support Us</h1>
        <p className="dark:text-white">
          Heroic is free! Donations help us keep the project alive.
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center md:items-stretch md:grid gap-4 md:grid-cols-3">
        {donate.map(({ description, name }, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <svg
              className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              {name}
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
