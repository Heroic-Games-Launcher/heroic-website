interface Props {
  question: string;
  answer: string[];
}

export default function FaqCard({ question, answer }: Props) {
  return (
    <div className="space-y-4">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h2 className="font-medium text-gray-900 dark:text-white">
            {question}
          </h2>
          <svg
            className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <p className="px-4 my-4 leading-relaxed text-gray-700 dark:text-white/70">
          {answer}
        </p>
      </details>
    </div>
  );
}
