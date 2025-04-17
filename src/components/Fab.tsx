import { useState } from "react";
import HFChat from "./HFChat";
import Chat from "./Chat";
import { FaCommentDots } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { PiOpenAiLogoLight } from "react-icons/pi";

// Floating Action Button Component
function FabIcon() {
  const [showChat, setShowChat] = useState(false);
  const [showHFChat, setShowHFChat] = useState(false);

  const toggleOverlay = () => {
    const overlay = document.getElementById("overlay");
    if (overlay) {
      if (showChat || showHFChat) {
        overlay.classList.remove("hidden");
      } else {
        overlay.classList.add("hidden");
      }
    }
  };

  // Triggering overlay visibility whenever state changes
  toggleOverlay();

  return (
    <>
      <div className="min-h-screen flex flex-row gap-8 items-center justify-center bg-gray-100">
        {showChat && <Chat />}
        {showHFChat && <HFChat />}
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setShowChat((prev) => !prev)}
        className="fixed bottom-6 left-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-white hover:text-black transition hover:animate-bounce hover:border hover:border-black"
      >
        <FaCommentDots size={24} />
        +
        <PiOpenAiLogoLight size={24} />
      </button>

      {/* Floating Button */}
      <button
        onClick={() => setShowHFChat((prev) => !prev)}
        className="fixed bottom-6 right-6 bg-amber-500 text-white p-4 rounded-full shadow-lg hover:bg-white hover:text-amber-500 hover:border hover:border-amber-500 transition hover:animate-bounce"
      >
        <FaCommentDots size={24} />
        +
        <SiHuggingface size={24} />
      </button>
    </>
  );
}

export default FabIcon;
