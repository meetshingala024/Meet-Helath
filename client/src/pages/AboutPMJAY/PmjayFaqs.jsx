import React, { useState } from "react";
const faqData = [
  {
    id: 1,
    question: "How do I locate my PMJAY Household ID number?",
    answer:
      "Families whose identities are determined by the SECC are given a 24-digit HH ID number.",
  },
  {
    id: 2,
    question: "Does the Ayushman Bharat programme pay for orthopaedic care?",
    answer: "Orthopaedic treatment is covered by the plan up to a certain amount.",
  },
  {
    id: 3,
    question: "Does PMJAY cover conditions that already exist?",
    answer:
      "The PMJAY begins to cover all pre-existing conditions on day one.",
  },
  {
    id: 4,
    question: "Does the PMJAY scheme cover farmers?",
    answer:
      "The programme provides insurance to those who live in both rural and urban areas.",
  },
  {
    id: 5,
    question: "Is the Ayushman Yojana programme's health insurance coverage sufficient?",
    answer:
      "The government established this programme to ensure access to healthcare for people living in poverty and those who cannot afford to pay the annual premium amount. The cost of treating diseases like diabetes, cancer, heart attacks, and other illnesses should be covered by adequate health insurance, starting at around Rs. 10 lakh for those who can afford the premium. You can also purchase a health insurance policy worth Rs. 1 crore and more according to your budget.",
  },
  {
    id: 6,
    question: "What should I do if a hospital won't treat an Ayushman Bharat Scheme beneficiary?",
    answer:
      "Within 30 days of the complaint being filed, a specialised Grievance Redressal Committee that has been designated at the national, state, and district levels will settle the grievance.",
  },
  {
    id: 7,
    question: "Do the recipients of the Ayushman Bharat health insurance programme have to pay anything to be covered?",
    answer:
      "In accordance with established packages, the programme provides free healthcare services to beneficiaries for secondary and tertiary inpatient hospitalisation at government- and privately-accredited facilities. Additionally, the Ayushman Yojana provides them with cashless and paperless access to inpatient hospital care",
  },
  {
    id: 8,
    question: "What is the procedure for obtaining a PMJAY card?",
    answer:
      "The PMJAY card is not required to receive treatment under the Ayushman Bharat Yojana. The beneficiary's Aadhaar card number is used to verify their identity. The PMJAY card is not required to receive treatment under the Ayushman Bharat Yojana. The beneficiary's Aadhaar card number is used to verify their identity.",
  }
];

const PmjayFaqs = () => {
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

export default PmjayFaqs;
