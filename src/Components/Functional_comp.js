import React from 'react';
function Hello(){
    return <h1>Hello Functional Component</h1>
}

export default Hello;


//Here we have created a functional component but we can make it short using Arrow Function

// export const Hello = () => <h1>Hello Functional Component</h1>

//Here while importing this component in App.js, we add some features on it.
//Before it was "import Hello from './Components/Functional_comp';
//Now it is "import {Hello} from './Components/Functional_comp';

// So generally, weather it is arrow function or normail function, if we use the export method right before the function, the we have to use 
//curly braces in App.js to import the component, but if we use the normal "export default name;" method, we don't have to use curly braces.