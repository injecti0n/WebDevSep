import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="post-1">Post Title</p>
      <p className="post-2">Post Title</p>
      <p className="post-3">Post Title</p>
      <p className="post-4">Post Title</p>
      <p className="post-5">Post Title</p>
    </div>
  );
}

export default App;
