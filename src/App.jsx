import "./App.css";
import ResourceList from "./components/ResourceList";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>DevHub</h1>
        <p>Your personal learning platform for web development</p>
      </header>

      <ResourceList />
    </div>
  );
}

export default App;
