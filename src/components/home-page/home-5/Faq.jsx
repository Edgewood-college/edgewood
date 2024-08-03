const accordionData = [
  {
    question: "How do I apply for admission?",
    answer:
      "You can apply for admission by filling out our online application form on our website. After submitting the form, our admissions team will review it and contact you for the next steps, including a campus tour and interview",
  },
  {
    question: "What is an A Level?",
    answer:
      "The Cambridge Advanced Level (A Level) is a globally recognized qualification offered by Cambridge Assessment International Education. It is typically studied over two years and is considered equivalent to the final year of high school or pre-university education.",
  },
  {
    question: " Is there an entrance exam?",
    answer:
      "Yes, all applicants are required to take an entrance exam to assess their academic readiness. The exam covers math, reading, and writing skills.",
  },
  {
    question: "Is the school Cambridge certified?",
    answer:
      "Yes, our school is Cambridge certified. We follow the Cambridge International curriculum, which provides a high-quality educational framework that is recognized globally.",
  },
  {
    question: "What are the benefits of attending a Cambridge certified school?",
    answer:
      " Attending a Cambridge certified school offers numerous benefits including an internationally recognized curriculum, a focus on critical thinking and problem-solving skills, and the opportunity to earn globally recognized qualifications such as IGCSEs and A Levels.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-seven md-mt-60" id="accordionOne">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={"heading" + index}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + index}
              aria-expanded={index === 1 ? "true" : "false"}
              aria-controls={"collapse" + index}
            >
              {item.question}
            </button>
          </div>
          <div
            id={"collapse" + index}
            className={`accordion-collapse collapse${
              index === 1 ? " show" : ""
            }`}
            aria-labelledby={"heading" + index}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
