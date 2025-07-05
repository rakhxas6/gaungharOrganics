import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const inquiries = [
  {
    question: "What are the benefits of using organic mustard oil?",
    answer:
      "Organic mustard oil is rich in antioxidants and omega-3 fatty acids, which help improve heart health, boost immunity, and provide natural anti-inflammatory properties.",
  },
  {
    question: "Is cold pressed coconut oil better than refined coconut oil?",
    answer:
      "Yes, cold pressed coconut oil retains more nutrients and natural flavor because it’s extracted without heat, unlike refined oils that lose some beneficial compounds during processing.",
  },
  {
    question: "Is cold pressed coconut oil better than refined coconut oil?",
    answer:
      "Yes, cold pressed coconut oil retains more nutrients and natural flavor because it’s extracted without heat, unlike refined oils that lose some beneficial compounds during processing.",
  },
  {
    question: "How should I store herbal ghee to keep it fresh?",
    answer:
      "Store herbal ghee in an airtight container at room temperature, away from direct sunlight. Properly stored, it can last several months without refrigeration.",
  },
  {
    question: "How should I store herbal ghee to keep it fresh?",
    answer:
      "Store herbal ghee in an airtight container at room temperature, away from direct sunlight. Properly stored, it can last several months without refrigeration.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // const navigate = useNavigate()

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // const goToContact = () => {
  //   navigate("/contact"); // navigate to /contact page
  // };
  return (
    <section className="flex flex-col items-center justify-center max-w-xl mx-auto p-6">
      <button className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 px-3 py-2 rounded-full border mb-4">
        <RiQuestionnaireLine size={20} />
        Common Questions
      </button>

      <h2 className="text-3xl font-extrabold text-green-600 mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-lg  font-serif max-w-xl text-center mb-6">
        Here are some common questions and answers to help you get started.
      </p>

      <div className="flex flex-col gap-6 w-full">
        {inquiries.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <button
              key={index}
              onClick={() => toggle(index)}
              className="flex flex-col w-full bg-white rounded-md p-4 shadow hover:shadow-md transition text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              aria-label={`Toggle answer for ${item.question}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RiQuestionnaireLine size={20} className="text-green-600" />
                  <span className="font-medium">{item.question}</span>
                </div>
                {isOpen ? (
                  <FiChevronUp size={20} />
                ) : (
                  <FiChevronDown size={20} />
                )}
              </div>

              {isOpen && (
                <p
                  id={`faq-answer-${index}`}
                  className="mt-3 text-gray-700"
                  role="region"
                  aria-live="polite"
                >
                  {item.answer}
                </p>
              )}
            </button>
          );
        })}
      </div>
      {/* onClick={goToContact} */}
      <button 
      className="flex items-center justify-center gap-2 mt-6 text-gray-500 hover:text-green-700 px-3 py-2 rounded-full border">
        <RiQuestionnaireLine size={20} />
        Still have questions?
      </button>
    </section>
  );
};

export default FAQ;
