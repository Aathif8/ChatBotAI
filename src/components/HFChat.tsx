import clsx from "clsx";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";

const predefinedQuestions = [
  "What’s my account balance?",
  "How can I apply for a loan?",
  "I saw a suspicious transaction.",
  "Is my loan approved?",
];

const HFChat = () => {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi, how can I help?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    try {
      const userHistory = messages.filter((m) => m.role === "user").map((m) => m.content);
      const res = await fetch("http://localhost:8000/askhf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userMessage,
          history: userHistory,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.answer }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Oops! Something went wrong." },
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
        <div className="overflow-y-auto max-h-[500px]">
          {/* Header */}
          <div className="p-6 bg-white">
            <div className="flex items-center space-x-2">
              <img
                src="./bank-img.jpg"
                alt="AI"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-lg font-semibold">Chat AI Agent - HF</div>
            </div>
            <h1 className="text-2xl font-bold">Hello</h1>
            <p className="text-lg font-medium text-gray-600">
              We’re here to help.
            </p>
            {/* Predefined Questions */}
            <div className="space-y-2">
              {predefinedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(q)}
                  className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-2xl text-sm font-medium"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 px-4 py-2 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={clsx("max-w-[80%] px-4 py-3 rounded-2xl", {
                  "bg-gray-100 self-start text-black": msg.role === "bot",
                  "bg-[#c164f8] text-white self-end ml-auto":
                    msg.role === "user",
                })}
              >
                {msg.content}
              </div>
            ))}
          </div>
        </div>

        {/* Input Box */}
        <div className="relative p-4 bg-white">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            className="w-full py-3 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c164f8]"
            placeholder="Type your message..."
          />
          <button
            onClick={() => sendMessage(input)}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[#c164f8]"
          >
            <IoMdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HFChat;
