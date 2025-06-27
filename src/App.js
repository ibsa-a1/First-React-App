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
import TrafficLight from './Components/conditionalRENDER';
import Programming from './Components/lists';
import Styles from './Components/style';
import Inline from './Components/Inline';
import './Appstyle.css';
import styles from './Appstyle.module.css';
import Form from './Components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'

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

      {/* <ConditionalRender /> */}


      {/* <div>
      <TrafficLight color="red" />
      <TrafficLight color="yellow" />
      <TrafficLight color="green" />
      <TrafficLight color="blue" /> 
    </div> */}

    {/* <Programming /> */}
    
    {/* <Styles heading = {true} /> */}

    {/* <Inline /> */}

    {/* <h1 className="regularcss">Regular CSS</h1>
    <h1 className={styles.modulecss}>Modular CSS</h1> */}
    {/* Here we can apply the css inside ./components/Inline.css here globally
    but, we can't apply the above CSS module for separate file components. */}


      {/* <Form /> */}

      <Router>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/Contact" element = {<Contact />}/>
          <Route path = "/About" element = {<About />}/>
          <Route path = "*" element = {<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
