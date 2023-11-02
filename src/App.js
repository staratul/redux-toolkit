import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import Todo from "./features/todo/Todo";
import Post from "./features/post/Post";
import Sport from "./features/sport/Sport";
import Form from "./Form/Form";
import Thingy from "./Thingy";

function App() {
  let Count = 0;
  const array = [
    { Type: "ADT", Count: 2 },
    { Type: "CHD", Count: 2 },
    { Type: "INF", Count: 1 },
  ];
  let passengers = [];

  for (let a of array) {
    for (let i = 1; i <= a.Count; i++) {
      passengers.push({ Id: Count, Name: "", Email: "" });
      ++Count;
    }
  }

  const getFormData = (data) => {
    console.log("Data", data);
  };

  return (
    <div className="App">
      <Form onChange={getFormData} passengers={passengers} />
    </div>
  );
}

export default App;

//  <header className="App-header">
//    <img src={logo} className="App-logo" alt="logo" />
//    <Counter />
//    <Todo />
//    <Post />
//    <Sport />
//  </header>;
