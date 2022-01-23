import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./Example/MyComponent.js";
import ListTodo from "./Todos/ListTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="app-title">TodoInput</p>
        <ListTodo />
        {/* <MyComponent /> Shortcut declaration */}
        {/* Or <MyComponent>   </MyComponent> Full declaration */}
      </header>
    </div>
  );
}

export default App;
