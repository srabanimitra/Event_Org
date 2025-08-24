import React, { useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi 👋 Select a question below:" }
    ]);

    // Predefined Q&A
    const qa = [
        { q: "When will the event start?", a: "The event will start at 10:00 AM on September 5, 2025 🎉" },
        { q: "Where is the event?", a: "The event will be held at the University Auditorium 🏛️" },
        { q: "Who can join?", a: "All students and faculty members are welcome! 🎓" },
        { q: "Is there any ticket price?", a: "Nope! Tickets are completely free 🎟️" }
    ];

    const handleQuestionClick = (question, answer) => {
        setMessages((prev) => [
            ...prev,
            { sender: "user", text: question },
            { sender: "bot", text: answer }
        ]);
    };

    return (
        <div>
            {/* Floating Icon Button */}
            <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
                💬
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <span>Event Bot 🤖</span>
                        <button onClick={() => setIsOpen(false)}>✖</button>
                    </div>

                    <div className="chat-body">
                        {messages.map((msg, i) => (
                            <div key={i} className={`chat-msg ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}

                        <div className="chat-questions">
                            {qa.map((item, i) => (
                                <button key={i} onClick={() => handleQuestionClick(item.q, item.a)}>
                                    {item.q}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
