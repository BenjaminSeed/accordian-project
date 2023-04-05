import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleId={toggleId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
