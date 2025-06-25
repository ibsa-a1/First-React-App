import Hello from './Components/Functional_comp';
import Hi from './Components/Class_comp';
import './App.css';
import Wellcome from './Components/JSX';
import Fullname from './Components/Props';
import LinkedIn from './Components/states';
import Event_func from './Components/Event_on_func';
import Event_on_class from './Components/Event_on_class';
import Event_Bind from './Components/Event_Bind';
import ConditionalRender from './Components/conditionalRENDER';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello React Family</h1> */}
      {/* <Hello></Hello> // We can also write <Hello/>
      <Hi></Hi> // We can also write <Hi/> */}

      {/* <Wellcome /> */}

      {/* <Fullname name="Ibsa" age="20"> 
        <p>This is the second child.</p>
        <button>Click me</button>
      </Fullname>
      <Fullname name="Nafrom" age="23">
        <p>This is the first child.</p>
      </Fullname>
      <Fullname name="Segni" age="14">
        <p>This is the third child.</p>
      </Fullname> */}


      {/* <LinkedIn /> */}



      {/* <Event_func /> */}


      {/* <Event_on_class /> */}

      {/* <Event_Bind /> */}

      <ConditionalRender />
    </div>
  );
}

export default App;
