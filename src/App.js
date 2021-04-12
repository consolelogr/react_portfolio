import Header from './components/Header';
import About from './components/About';
import './css/App.css';
import Webpages from './components/Webpages';

function App() {
  return (
   <div className="App">
   <Header title='PORTFOLIO' />
   <About  />
   <Webpages />
   </div>
  );
}

export default App;
