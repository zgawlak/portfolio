import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Header</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </nav>
      </header>
      <main>
        <div id="about">
          <h2>About</h2>
        </div>
        <div id="projects">
          <h2>Projects</h2>
        </div>
        <div id="contact">
          <h2>Contact</h2>
        </div>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
