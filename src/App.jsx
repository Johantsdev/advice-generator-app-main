import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>Hello world</h1>;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
