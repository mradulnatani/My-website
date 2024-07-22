import './App.css';
import Navbar from './myComponents/navbar';
import Main from './myComponents/main';
import About from './myComponents/about';
import Projects from './myComponents/projects';
import Contact from './myComponents/Contact';
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
      <Contact/>
      <hr/>
      <foote>
        <p>© 2024 Mradul Natani. All rights reserved.
Designed and developed with ❤️ by Your Mradul Natani.
<p>mradulnatani0gmail.com | 9302956451 |
<a href='https://www.linkedin.com/in/mradul-natani-882194248/'> Linkedin</a> | <a href='https://github.com/mradulnatani'>github</a></p>
</p>
      </foote>
    </div>
  );
}

export default App;
