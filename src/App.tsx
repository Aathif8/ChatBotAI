import "./App.css";
import Chat from "./components/Chat";
import HFChat from "./components/HFChat";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-row gap-8 items-center justify-center bg-gray-100">
        <Chat />
        <HFChat />
      </div>
    </>
  );
}

export default App;
