import { ToastContainer } from "react-toastify";
import "./App.css";
import FabIcon from "./components/Fab";
import FileUpload from "./components/FileUpload";

function App() {
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
        <p className="font-semibold text-2xl">
          Upload your FAQ Documents Below.Click the buttons to chat with AI Bots!
        </p>
        <FileUpload />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 opacity-50 z-40 hidden"
          id="overlay"
        ></div>
        <div className="absolute bottom-6 z-50">
          <FabIcon />
        </div>
      </div>
    </>
  );
}

export default App;
