import ReactDOM from "react-dom/client";
import Attribution from "./components/Attribution";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card />
      <Attribution />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
