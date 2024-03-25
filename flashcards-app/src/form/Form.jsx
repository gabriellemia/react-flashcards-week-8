import { useState } from 'react'
import "./Form.css"


function Form() {
 
const [newFlashcard, setNewFlashcard] = useState({
    question: '',
    answer: '',
  });

  function handleSubmit(e){
e.preventDefault()
if (newFlashcard === "") return 

// onSubmit(newFlashcard)

setNewFlashcard("")

  }


    return (
      
        <form onChange={handleSubmit}>
            <label htmlFor="question">Question: </label>
        <input 


        type="text" 
        name="question" 
        value={newFlashcard.question} 
        onChange={e => setNewFlashcard(e.target.value)}
        
        />

        <label htmlFor="answer">Answer: </label>
        <input 



        type="text" 
        name="answer" 
        value={newFlashcard.answer}
        onChange={e => setNewFlashcard(e.target.value)}
        />

<button type="submit">Add</button>

    </form>


     
    )
  }
  
  export default Form;