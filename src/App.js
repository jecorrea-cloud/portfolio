// import logo from './logo.svg';
// import './App.css';
import NavBar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <Switch>
          <Route path="/about" exact component={About}></Route>
          <Route path="/" exact component={Home} />
      </Switch>
      </header>
    </div>
  );
}

export default App;
