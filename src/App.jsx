import { useState } from 'react'
import Ping from "./Components/Ping"


function App() {
  const [email, setEmail] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }


  // const emailAccept = (e) => {
  //   e.preventDefault();
  //   window.alert(`Your Email has been submitted, you will receive a notification soon!`)
  // }


  return (
    <>
    <Ping
    email={email}
    onChangeEmail={handleEmailChange}
    
    />
      
    </>
  )
}

export default App
