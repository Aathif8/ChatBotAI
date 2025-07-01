import { ToastContainer } from "react-toastify";
import "./App.css";
import FabIcon from "./components/Fab";
import FileUpload from "./components/FileUpload";
import { useState } from "react";

function App() {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [language, setLanguage] = useState<"en" | "ta">("en");
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex flex-col gap-8 items-center justify-center bg-gray-100 relative z-0">
        <img
          src="./MSTSOFTLogo.svg"
          alt="Logo"
          className="fixed top-4 left-4 z-50"
          width={200}
          height={100}
        />

        <h1 className="text-6xl font-medium uppercase bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
          AI ChatBot Application
        </h1>
        <h3 className="font-semibold text-2xl">
          Upload your FAQ Documents Below to chat with AI Bot
        </h3>
        <div className="flex flex-col gap-4 items-center">
          <p>Choose the Comfortable Language to speak With</p>
          <div className="top-1/2 right-1/2 z-50 flex items-center gap-2">
            <div
              className="relative inline-flex items-center cursor-pointer"
              onClick={() => setLanguage(language === "en" ? "ta" : "en")}
            >
              <input
                type="checkbox"
                checked={language === "ta"}
                className="sr-only"
                readOnly
              />

              {/* Switch background */}
              <div className={`w-20 h-10 ${language=== "ta"? "bg-green-300" : "bg-blue-300"} rounded-full shadow-inner transition-colors duration-300`}></div>

              {/* Sliding circle */}
              <div
                className={`absolute top-1 left-1 w-8 h-8 rounded-full shadow transform transition-transform duration-300 ${
                  language === "ta" ? "translate-x-10 bg-green-500" : "bg-blue-500"
                }`}
              />

              {/* Left label (English) */}
              <span
                className={`right-24 absolute transition-opacity duration-200 ${
                  language === "en" ? "font-bold text-blue-500 text-xl" : "font-medium text-black text-md"
                }`}
              >
                English
              </span>

              {/* Right label (Tamil) */}
              <span
                className={`absolute left-24 transition-opacity duration-200 ${
                  language === "ta" ? "font-bold text-green-500 text-xl" : "font-medium text-black text-md"
                }`}
              >
                தமிழ்
              </span>
            </div>
          </div>
        </div>
        <FileUpload onFileUpload={() => setIsFileUploaded(true)} />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 opacity-50 z-40 hidden"
          id="overlay"
        ></div>
        <div className="absolute bottom-6 z-50">
          <FabIcon disabled={!isFileUploaded} language={language} />
        </div>
      </div>
    </>
  );
}

export default App;
