// "Virtual DOM", as the name suggests is the Virtual representation of the real DOM and is local to React. Every time the state of application changes, React does those changes in the Virtual DOM first and then sync the real DOM accordingly. A Virtual DOM object has the same properties as a real DOM object but it does not have the powers to directly reflect the changes on the screen. But the question still remains the same, "how it is faster than the real DOM"?
// 
// It’s the magic of Diffing Algorithm that allows updating the Virtual DOM much faster than real DOM. When new elements are added to UI, a virtual DOM is created, and if the state of any of these elements changes, a new virtual DOM tree is created. This new tree formed is then compared to the previous virtual DOM tree. Once the comparison is done, the virtual DOM figures out the best possible way to make the required changes to real DOM, ensuring minimal operations in real DOM and hence increasing the efficiency of the application UI. Likewise in React whenever the state of any component changes, React updates the Virtual DOM tree which is then compared with the previous version of virtual DOM tree and figures out which virtual DOM objects have changed. This process is called “Diffing”. React updates only changed objects in the real DOM which makes the performance far better as compared to manipulate the real DOM directly. ***The use of Virtual DOM in React provides developers with superior development experience.***
// "Reconciliation", in React refers to the process of determining the minimal number of changes required to update the UI when the underlying data or state of a component changes. Otherwise described as, The process of keeping virtual DOM in sync with the real DOM. React accomplishes this by comparing the new component tree with the previous one and then applying the necessary updates to the actual DOM. This approach allows React to deliver a smooth and efficient user experience, even in complex applications.
// "Diffing", The comparison between the virtual DOMs (to figure out what needs to be updated in the UI) is referred to as diffing, and the algorithm that does it is called diffing algorithm.
// "The Diffing Algorithm", The diffing algorithm compares the two trees by comparing their root nodes first.
import React from 'react'
// React Dom uses Virtual Dom to render content on the page, and Virtual Dom is an "in memory" representation of the real Dom. Instead of interacting with the Real Dom directly, Virtual dom works with an in memory virtual representation of the Real Dom only updating components based on modification/manipulation, which can be defined/customized by writing a spefiic algorithm, the Real Dom will only be updated during the process called "Reconciliation" with a minimal set of changes required for optomization. 
import ReactDOM from 'react-dom/client'
// App is a file or component, that will contain content to share with the root, heading, body, footer, etc
import App from './App.jsx'
// importing ./index.css not to be confused with index.html
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* react.StrictMode, similar to ES Lint, helps to show erors and insure proper formatting for best practices */}
    <App />
  </React.StrictMode>,
)
