import { useState } from 'react'
import "./Form.css"


function Form() {
 
const [newFlashcard, setNewFlashcard] = useState({
    question: '',
    answer: '',
  });

  function handleSubmit(e){
e.preventDefault()
if (newFlashcard.question === "" && newFlashcard.answer === "") return 



setNewFlashcard({
    question: '',
    answer: '',
})

console.log(newFlashcard);

  }



    return (
      
        <form onSubmit={handleSubmit}>
            <label htmlFor="question">Question: </label>
        <input 


        type="text" 
        name="question" 
        value={newFlashcard.question} 
        onChange={e => setNewFlashcard({...newFlashcard, question: e.target.value})}
        
        />

        <label htmlFor="answer">Answer: </label>
        <input 



        type="text" 
        name="answer" 
        value={newFlashcard.answer}
        onChange={e => setNewFlashcard({...newFlashcard, answer: e.target.value})}
        />

<button type="submit">Add</button>

    </form>


     
    )
  }
  
  export default Form;