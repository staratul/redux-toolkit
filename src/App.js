import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import Todo from "./features/todo/Todo";
import Post from "./features/post/Post";
import Sport from "./features/sport/Sport";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Todo />
        <Post />
        <Sport />
      </header>
    </div>
  );
}

export default App;
