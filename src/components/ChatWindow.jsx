import { useEffect, useRef, useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { sendMessage } from "../api";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSend = async (msg) => {
    const userMessage = { role: "user", text: msg };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const answer = await sendMessage(msg);
      const botMessage = { role: "bot", text: answer || "I don't know." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-history">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} role={msg.role} text={msg.text} />
        ))}
        {loading && <ChatMessage role="bot" text="Typing..." />}
        <div ref={chatEndRef} />
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}
