import ResourceList from "./components/ResourceList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>DevHub</h1>
        <p>Learn web development step by step</p>
      </header>

      <ResourceList />
    </div>
  );
}

export default App;
