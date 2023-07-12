import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const agentID = import.meta.env.VITE_AGENT_ID ?? "";
  const dfMessenger = document.querySelector("df-messenger");
  dfMessenger?.setAttribute("agent-id", agentID);
  return (
    <div>
      <a href="#" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="#" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      {/* <a href="#" target="_blank">
        <img src={GDTLogo} className="logo" alt="GDT logo" />
      </a>
      <p>អគ្គនាយកដ្ឋានពន្ធដារ នៃក្រសួងសេដ្ឋកិច្ច និង ហិរញ្ញវត្ថុ</p> */}
    </div>
  );
}

export default App;
