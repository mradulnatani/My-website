import './App.css';
import Navbar from './myComponents/navbar';
import Main from './myComponents/main';
import About from './myComponents/about';
import Projects from './myComponents/projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <Main/>
      <br/><br/>
      <br/>
      <br/>
      <br/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
