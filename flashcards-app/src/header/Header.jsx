import reactLogo from '/src/assets/react.svg'
import "./Header.css"

function Header() {
 

    return (
      
      <header className='headerContainer'>
  <img src={reactLogo} alt="Example Image"/>  
  <h1>React Flashcards</h1>
  <p>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</p>
  </header>
     
    )
  }
  
  export default Header;