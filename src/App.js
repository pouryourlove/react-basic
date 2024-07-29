import Add from "./components/Add";
import Greetings from "./components/Greetings";
import { Fragment } from "react";

function App(){
  const myName = 'Julia'
  const multiply = (a,b) => a * b; 
  const specialClass = "simple-class"
  return (
  <>
      <h1>{myName}</h1>
      <p>2+ 2 = {2+2}</p>
      <p>my friends list:{["Yukka","Lingling","Yurika"]}</p>
      <p>2*2 = {multiply(2,2)}</p>
      <p className={specialClass}>This is a special class</p>
  </>
  )

}

export default App;





// import { Component } from "react";
// class App extends Component{
//  To show content on the screen 
//  render(){
//     return <h1>Hello Lingling</h1>
//   }
// }





//components
//components are independent and reusable bits of code. They serve the same purpose as Javascript functions, but work in isolation and return HTML

//JSX
//JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

//Exprsesions in JS
//with jsx you can write expressions inside curly braces. The expression can be a react variable, 
//or property, or any other valid javascript expression.
//jsx will execute the expression and return the result