import { useState } from "react";
import HFChat from "./HFChat";
import Chat from "./Chat";
import { FaCommentDots } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { PiOpenAiLogoLight } from "react-icons/pi";

interface FabIconProps {
  disabled?: boolean;
}

// Floating Action Button Component
function FabIcon({ disabled }: FabIconProps) {
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
        {showChat && <Chat onClose={() => setShowChat(false)} />}
        {showHFChat && <HFChat onClose={() => setShowHFChat(false)} />}
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setShowChat((prev) => !prev)}
        className={`fixed bottom-6 left-6 text-white p-4 rounded-full shadow-lg transition flex flex-col items-center
          ${
            disabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-white hover:text-black hover:animate-bounce hover:border hover:border-black"
          }
        `}
        disabled={disabled}
      >
        <FaCommentDots size={24} />
        +
        <PiOpenAiLogoLight size={24} />
      </button>

      {/* Floating Button */}
      <button
        onClick={() => setShowHFChat((prev) => !prev)}
        className={`fixed bottom-6 right-6 text-white p-4 rounded-full shadow-lg ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-amber-500 hover:bg-white hover:text-amber-500 hover:border hover:border-amber-500 transition hover:animate-bounce"
        }`}
        disabled={disabled}
      >
        <FaCommentDots size={24} />
        +
        <SiHuggingface size={24} />
      </button>
    </>
  );
}

export default FabIcon;
