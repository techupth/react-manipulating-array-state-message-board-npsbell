import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]) //List
  const [getMessage, setGetMessage] = useState("") //input

  const handleGetMessage = (event) => {
    setGetMessage(event.target.value)
  }

  const addMessage = (event) => {
    event.preventDefault()
    const newMessage = [...message]
    newMessage.push(getMessage)
    setMessage(newMessage)
    setGetMessage("")
  }

  const deleteMessage = (messageIndex) => {
    const newMessage = [...message]
    newMessage.splice(messageIndex, 1)
    setMessage(newMessage)
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={getMessage}
            onChange={handleGetMessage}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>Submit</button>
      </div>
      <div class="board">
      {message.map((message, index) => {
            return(
              <div key={index} className="message">
                <h1>{message}</h1>
                <button className="delete-button" onClick={() => {
                  deleteMessage(index)
                }}>x</button>
              </div>
            )
          })}
        </div>
      </div>
  );
}

export default MessageBoard;
