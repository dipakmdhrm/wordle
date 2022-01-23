import logo from './logo.svg';
import './App.css';
import Wordle from './Components/Wordle';
import Header from './Components/Header';
import Keyboard from './Components/Keyboard';
import Popup from './Components/Popup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Wordle></Wordle>
      <Keyboard></Keyboard>
      <Popup></Popup>
    </div>
  );
}

export default App;
