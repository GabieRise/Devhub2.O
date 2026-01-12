// import Header from "./components/Header";
// import ResourceList from "./components/ResourceList";

// function App() {
//   return (
//     <>
//       <Header />
//       <ResourceList />
//     </>
//   );
// }

// export default App;

import ResourceList from "./components/ResourceList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>DevHub</h1>
        <p>Your personal learning platform for web development</p>
      </header>

      <main>
        <ResourceList />
      </main>
    </div>
  );
}

export default App;
