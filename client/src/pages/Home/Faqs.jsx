import React, { useState } from "react";
const faqData = [
  {
    id: 1,
    question: "What is ABHA ID?",
    answer:
      "ABHA ID or ABHA Card is a unique identity for your health that facilitates you a health locker to receive, store & share medical records from health service providers with your consent.",
  },
  {
    id: 2,
    question: "What is the Full form of PHR?",
    answer: "The Full form of PHR is Personal Health Record.",
  },
  {
    id: 3,
    question: "What is a national health card?",
    answer:
      "The national health care is the ABHA health ID card issued through Ayushman Bharat DIgital Mission (ABDM) for seamless management and sharing of medical records.",
  },
  {
    id: 4,
    question: "What Is Health ID?",
    answer:
      "Health ID is an ID issued after creating ABHA under the Ayushman Bharat DIgital Mission (ABDM) for seamless management and sharing of medical records.",
  },
  {
    id: 5,
    question: "What is a digital health ID?",
    answer:
      "Digital Health ID is a unique identity for your health that facilitates you a health locker to receive, store & share medical records from health service providers with your consent.",
  },
  {
    id: 6,
    question: "What is Abha address in the health card?",
    answer:
      "ABHA address (also known as Personal Health Records Address) is a declared username required to sign into Health Information Exchange & Consent Manager (HIE-CM).",
  },
  {
    id: 7,
    question: "What Is Abha Account?",
    answer:
      "ABHA ID or ABHA Card is a unique identity for your health that facilitates you a health locker to receive, store & share medical records from health service providers with your consent.",
  },
];

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setOpenAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  const isAccordionOpen = (accordionId) => {
    return openAccordion === accordionId;
  };

  return (
    <div className="bg-white rounded-lg shadow-md my-5">
      <div className="p-6">
        <h1 className="text-2xl font-bold flex justify-center mb-4">
          Frequently Asked Questions - (FAQS)
        </h1>
        <div className="space-y-4">
          {faqData.map((faqItem) => (
            <div key={faqItem.id}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-4 font-medium text-left text-gray-500 border border-gray-200 rounded ${
                  isAccordionOpen(faqItem.id) ? "bg-gray-100" : ""
                }`}
                onClick={() => toggleAccordion(faqItem.id)}
                aria-expanded={isAccordionOpen(faqItem.id)}
                aria-controls={faqItem.id}
              >
                {faqItem.question}

                <svg
                  data-accordion-icon=""
                  className={`w-3 h-3   ${
                    isAccordionOpen(faqItem.id)
                      ? "transform rotate-180 ease-in-out duration-500"
                      : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
              <div
                id={faqItem.id}
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  isAccordionOpen(faqItem.id) ? "max-h-screen" : "max-h-0"
                }`}
                aria-labelledby={`${faqItem.id}-heading`}
              >
                <div className="p-4 bg-gray-100">
                  <p className="text-gray-500">{faqItem.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
