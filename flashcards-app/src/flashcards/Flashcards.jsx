import "./Flashcards.css";
import Flashcard from "./flashcards-app/src/flashcards/flashcard/Flashcard.jsx";
import Form from "flashcards-app/src/form/Form.jsx";

function Flashcards({ flashcards, flipFlashcard, deleteFlashcard }) {
  return (
    <ul className="flashcard-list">
      {/* {flashcards.length === 0 && "No flashcards yet!"} */}
      {flashcards.map(todo => {
        return (
          <Flashcard />
        )
      })}
    </ul>
  );
}

export default Flashcards;
