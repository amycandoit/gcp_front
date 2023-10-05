import logo from './logo.svg';
import './App.css';
import Input from "./components/Input";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input/>
        <List/>
      </header>
    </div>
  );
}

export default App;
