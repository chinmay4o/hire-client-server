import React, { useState, useEffect } from "react";

const Chat = () => {
  const [chat, setChat] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setChat(!chat);
    }, 7000);
  }, []);

  return (
    <div className="chat-box" onClick={() => setChat(!chat)}>
      {chat ? (
        <div className="chat-section">
          <p className="que">Rate your experience</p>

          <div className="exp">
            <p className="ans">Okay</p>
            <p className="ans">Best</p>
            <p className="ans">Needs to improve</p>
          </div>
        </div>
      ) : null}
      <i class="fa fa-comments chat-btn" aria-hidden="true"></i>
    </div>
  );
};

export default Chat;
