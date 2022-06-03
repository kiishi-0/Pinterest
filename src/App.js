import './App.css';
import Header from './Components/Header';
import Mainboard from './Components/Mainboard';
import unsplash from './api/unsplash';

function App() {

  const getImages = term =>{
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    });
  }

  const onSearchSubmit = term =>{
    getImages(term)
  }
  onSearchSubmit("bali")
  return (
    <div className="App">
      <Header ></Header>
      <Mainboard></Mainboard>
    </div>
  );
}

export default App;
