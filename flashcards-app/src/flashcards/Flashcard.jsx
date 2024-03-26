import "./Flashcard.css";
import { useState } from "react";
import PropTypes from "prop-types";

function Flashcard({ question, answer, onDelete }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <div onClick={toggleAnswer} style={{ cursor: "pointer" }}>
        {showAnswer ? (
          <div>
            <h3>{answer}</h3>
          </div>
        ) : (
          <div>
            <h3>{question}</h3>
          </div>
        )}
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
// Not strictly necessary, the code works without it but esLint was giving me errors so I added it.
// Just specifies the type the prop is, apparently good for clarity, maintanability and debugging.
Flashcard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Flashcard;
