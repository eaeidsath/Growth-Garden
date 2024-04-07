import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
// import ChatList from "./ChatList";
// import ChatBox from "./ChatBox";

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const pusher = new Pusher(process.env.PUSHER_KEY, {
      cluster: process.env.PUSHER_CLUSTER,
      encrypted: true,
    });

    const channel = pusher.subscribe("chat-channel");
    channel.bind("new-message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      pusher.unsubscribe("chat-channel");
    };
  }, []);

  const sendMessage = () => {
    fetch("http://localhost:3001/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user, message }),
    })
      .then(() => setMessage(""))
      .catch((error) => console.error("Error sending message:", error));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
};