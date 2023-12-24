// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// if image is in the source folder must import using file path
// import viteLogo from '/vite.svg'
// if its in the public folfer must import it with the path directly
// import './App.css'
// import Account from './Account'
// A component must have a function or Class, must have a return (), and must be exported. Must use capatilized Letter for the name of the function and file. Component function or component class. Data inside of the return is JSX.
// components just like functions can be used many different times.
// props stand for properties, they are used to pass the data from one component to another component, data can be any javascript data type, string, boolean, etc, you can even pass in functions this way.
// function App() {
//   // const [count, setCount] = useState(0)
// const listOfNames = ["Jeff", "Dylan", "Ryan"]

//   const EventHandleClick = () => {
//     alert("heading clicked")
//   }
//   return (
//     <>
//       <h1 className="h1" onClick={EventHandleClick}>
//         Heading 1 {
//         }
//       </h1>
//       <h2>
//         Second heading
//       </h2>
//       {/* checks if the array list of names has values in it then move forward. Will use this when interacting with database to ensure app has time to retrieve data keeping the app from crashing.  */}
//       {listOfNames && listOfNames.map((fields, id) => {
//         return (
//           <Account key = {id} username = {fields}/>
//         )
//       })}
//       {/* <Account first="jeff" last="rojas"/>
//       <Account first="Dylan" last="reynolds"/>
//       <Account first="Ryan" last="sharp"/> */}
//     </>
//   )
// }

// export default App

// const Account = ({username}) => {

//         return (
//             <>
//             <h1>Account</h1>
//             <p>{username}</p>
//             </>
//         )
//     }

//     export default Account

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App