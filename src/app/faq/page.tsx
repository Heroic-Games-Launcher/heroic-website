import FaqCard from "@/components/FaqCard";
import { faqs } from "@/contants";

export const metadata = {
  title: "Faq",
};

export default function Faq() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold dark:text-white">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-2 mt-5">
        {faqs.map(({ question, answer }) => (
          <FaqCard key={question} question={question} answer={answer} />
        ))}
      </div>
    </main>
  );
}
