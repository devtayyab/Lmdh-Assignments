import splash from './assets/splash.png'
import './App.css';
import Signup from './components/Forms';

function App() {
  return (
    <div className="App">
        <div className='card'>
          <img src={splash} className="splash"></img>
          <Signup></Signup>
        </div>
    </div>
  );
}

export default App;
