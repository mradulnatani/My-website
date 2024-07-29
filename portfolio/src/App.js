import './App.css';
import Navbar from './myComponents/navbar';
import Main from './myComponents/main';
import About from './myComponents/about';
import Projects from './myComponents/projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <br/>
      <br/>
      <br/>
      <br/>
      <About/>
      <Projects/>
      <footer style={{
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  borderTop: '1px solid #444'
}}>
  <p style={{
    fontSize: '14px',
    margin: '0 0 10px 0',
    lineHeight: '1.5'
  }}>
    © 2024 Mradul Natani. All rights reserved.<br />
    Designed and developed with <span style={{ color: '#ff6b6b' }}>❤️</span> by Mradul Natani.
  </p>
  <p style={{
    fontSize: '14px',
    margin: '10px 0',
    lineHeight: '1.5'
  }}>
    mradulnatani0@gmail.com | 9302956451 |
    <a href='https://www.linkedin.com/in/mradul-natani-882194248/' style={{
      color: '#4CAF50',
      textDecoration: 'none',
      marginLeft: '5px',
      transition: 'color 0.3s ease'
    }} onMouseOver={(e) => e.target.style.color = '#45a049'} onMouseOut={(e) => e.target.style.color = '#4CAF50'}>
      LinkedIn
    </a> | 
    <a href='https://github.com/mradulnatani' style={{
      color: '#4CAF50',
      textDecoration: 'none',
      marginLeft: '5px',
      transition: 'color 0.3s ease'
    }} onMouseOver={(e) => e.target.style.color = '#45a049'} onMouseOut={(e) => e.target.style.color = '#4CAF50'}>
      GitHub
    </a>
  </p>
</footer>
    </div>
  );
}

export default App;
