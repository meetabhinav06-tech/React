import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome  from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
    {/* <Greet name="Test" heroname="t1">
      <p>This is children props</p>
    </Greet>
     <Greet name="abhi" heroname="a1"> 
      <button>Action</button> 
      </Greet>

      <Greet name="Shiv" heroname="s1" />
    <Welcome name="Test" heroname="t1" />
    <Welcome name="Abhi" heroname="a1" />
    <Welcome name="Shiv" heroname="s1" /> */}

    </div>
  );
}

export default App;
