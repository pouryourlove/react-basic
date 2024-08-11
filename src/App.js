import ComponentA from "./components/ComponentA"

function App() {
  const name = "Lingling"
  return (
    <>
      <ComponentA name={name} />
      
      
    </>
  )
}

export default App











// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);

//   //1.Render for the first time
//   //2.Anytime we do (side effect)
//   //3. dependency list

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//       const data = await response.json()
//       if(data && data.length) setData(data)
//     }
    
//     getData()
//   });

//   return (
//     <>
//       <ul>
//         {data.map(item => (
//           <li key={Math.random()}>{item.title}</li>
//         ))}
//      </ul>
//     </>
//   );
// }

// export default App;

// import {useEffect, useState} from 'react'

// function App() {
//   const [value, setValue] = useState(0)

//   //1.Render for the first time
//   //2.Anytime we do (side effect)
//   //3. dependency list

//   useEffect(() => {
//     console.log("HELLO")
//     document.title = `Increment(${value})`
//   },[value])

//   return (
//     <>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value + 1)}>Click ME</button>
//     </>
//   );
// }

// export default App

// import { useState } from "react"

// function App() {
//   const [username, setUsername] = useState('')

//   const handleChange = (event) => {
//     setUsername(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     alert(`You typed ${username}`)
//     setUsername('')
//   }

//   return (
//     <>
//       <h1>Form Demo</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={handleChange}/>
//         <button>Submit</button>
//       </form>

//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// function App() {
//   const [movies, setMovies] = useState([
//     {
//       id: 1,
//       title: "Before Sunrise",
//       ratings: 9,
//     },
//     {
//       id: 2,
//       title: "Before Sunset",
//       ratings: 10,
//     }
//   ]);

//   const handleClick = () => {
//     setMovies(movies.map(m => m.id === 1? {...movies, title: "Before midnight"} : m))
//   }
//   return (
//     <>
//       {movies.map((movie) => (
//         <li key={Math.random()}>{movie.title}</li>
//       ))}
//       <button onClick={handleClick}>Change Name</button>
//     </>
//   )
// }

// export default App

// import { useState } from "react"

// function App() {
//   const [movie, setMovie] = useState({
//     title: "Before Sunrise",
//     ratings: 10
//   })

//   const handleClick = () => {
//     const copyMovie = {
//       ...movie,
//       ratings: 5,
//     }

//     setMovie(copyMovie)
//     // seteMovie({...movie,ratings:5}) //이렇게 간단히 표현 가능
//   }

//   return (
//     <>
//       <h1>{movie.title}</h1>
//       <p>Ratings:{movie.ratings}</p>
//       <button onClick={handleClick}>Change Rating</button>
//     </>
//   )
// }

// export default App

// import { useState } from "react";

// function App() {
//   const [friends, setFriends] = useState(["Lingling","Yuuka"])

//   const addOne = () => {
//     setFriends([...friends,"Zzong"])
//   }
//   const removeOne = () => {
//     setFriends(friends.filter(f => f != "Lingling"))
//   }
//   const updateOne = () => {
//     setFriends(friends.map(f => f === "Lingling" ? "Lingling Lee" : f))
//   }

//   return (
//     <>
//       {friends.map(f => (
//         <li key={Math.random()}>{f}</li>
//       ))}

//       <button onClick={addOne}>Add one</button>
//       <button onClick={removeOne}>Remove one</button>
//       <button onClick={updateOne}>Update one</button>
//     </>
//   );
// }

// export default App;

// import { useState } from 'react'

// const Counter = () => {
//   const [username, setUsername] = useState("Lingling");

//   const changeName = () => {
//     setUsername("Yuuka")
//   }

//   return (
//     <>
//       <h1>{username}</h1>
//       <button onClick={changeName}> change name</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//      <Counter/>
//     </>
//   )
// }

// export default App

// import { useState } from "react"

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1)
// }

//   const decrement = () => {
//     setCount(count -1)
//   }
//   return <>
//     <h1>{count}</h1>
//     <button onClick={increment}> + </button>
//     <button onClick={decrement}> - </button>
//   </>
// }

// function App() {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App

// import { FaCartArrowDown, FaGithub } from "react-icons/fa";

// function App() {
//   return (
//     <>
//     <FaCartArrowDown/>
//     < FaGithub/>
//     </>
//   )
// }

// export default App

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

//State
//the state is a built-in react object that is used to contain data or information about the component. a component's state can change over time; whenever it changes, the component re-renders.

//hooks
// hooks are a new addition in react 16. They let you use state and other react features without writing a class.

//useState()
//The react useState hook allows us to track state in a function component. state generally refers to data or properties that need to be tracking in an application

//useEffect()
//The useEffect hook allows you to perform side effects in your components.
// some example of side effects are: fetching data, directly updating the DOM
