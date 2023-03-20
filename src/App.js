import './App.css';
import Intro from './Pages/Intro';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Ourworks from './Components/Ourworks';
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Aboutus/>
      <Services/>
      <Ourworks/>
      <Contactus/>
    </div>
  );
}

export default App;
