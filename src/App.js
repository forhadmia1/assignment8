import './App.css';
import Article from './Article/Article';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Article></Article>
    </div>
  );
}

export default App;
