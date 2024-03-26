import { useState } from "react";
import "./Form.css";
import Flashcard from "/src/flashcards/Flashcard.jsx";

function Form() {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFlashcard = { question, answer };
    setFlashcards([...flashcards, newFlashcard]);
    setQuestion("");
    setAnswer("");
  };

  const handleDelete = (index) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards.splice(index, 1);
    setFlashcards(updatedFlashcards);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question: </label>
        <input
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <label htmlFor="answer">Answer: </label>
        <input type="text" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} {...flashcard} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
}

export default Form;
