import './App.css';
import { SwipeButtons, TinderCards } from "./components";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
        <Header />
        <TinderCards />
        <SwipeButtons />
    </div>
  );
}

export default App;
