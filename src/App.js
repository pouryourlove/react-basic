import { FaCartArrowDown, FaGithub } from "react-icons/fa";


function App() {
  return (
    <>
    <FaCartArrowDown/>
    < FaGithub/>
    </>
  )
}

export default App










// import './index.css'
// import Button from 'react-bootstrap/Button';

// function Buttons() {
//   return (
//     <>
//       <Button variant="primary">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="success">Success</Button>
//       <Button variant="warning">Warning</Button>
//       <Button variant="danger">Danger</Button>
//       <Button variant="info">Info</Button>
//       <Button variant="light">Light</Button>
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </>
//   );
// }


// function App() {
//   return (
//     <>
//       <Buttons/>
//     </>
//   )
// }

// export default App









// function App() {
//   const differentStyles = {
//     color: "white",
//     backgroundColor:"crimson"
//   }
//   return (
//     <>
//     <h1 style={{color:"black",backgroundColor:"#ccc"}}>Hello Lingling</h1>
//     <h2 style={differentStyles}>LingLing</h2>
//     </>
//   )
// }

// export default App





// const ValidPassword = () => <h1>Valid Password</h1>
// const InvalidPassword = () => <h1>Invalid Password</h1>

// const Password = ({isValid}) => {
//   // if(isValid){
//   //   return <ValidPassword/>
//   // }

//   // return <InvalidPassword/>

//   return isValid ? <ValidPassword/> : <InvalidPassword/>

// }

// function App(){
    
//   return (
//   <>
//     <Password isValid={true}/>
//     <Password isValid={false}/>
//   </>
//   )

// }

// export default App;







// const Cart = () => {
//   const items = ["Wireless Earbuds","Power Bank","New SSD","Hoodies"]
//   return(
//   <> 
//     <h1>Cart</h1>

//     {items.length>0 && <h2>You have {items.length} items in your cart</h2>}

//     <ul>
//       <h4>Products</h4>
//       {items.map((item) => (
//         <li key={Math.random()}>{item}</li>
//       ))}
//     </ul>
//   </>  
//   )
// }

// function App() {
//   return (
//     <Cart />
//   )
// }

// export default App






// const ValidPassword = () => <h1>Valid Password</h1>
// const InvalidPassword = () => <h1>Invalid Password</h1>

// const Password = ({isValid}) => {
//   if(isValid){
//     return <ValidPassword/>
//   }

//   return <InvalidPassword/>
// }

// function App(){
    
//   return (
//   <>
//     <Password isValid={true}/>
//     <Password isValid={false}/>
//   </>
//   )

// }

// export default App;





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

//Lists
//in react, you will render lists with some type of loop. the javascript map()array 
//method is generally the preferred method

//props/properties
//props are arguments passed into react components
//props are passed to components via html attributes

//conditional rendering
//conditional rendering in React wors the same way conditions work in js. use js operators like if or the conditional operator to create elements representing the current state and let React update the UI to match them. 