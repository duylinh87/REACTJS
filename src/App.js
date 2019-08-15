import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestingComponent from './TestingComponent'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  onLon = () => {
    this.setState({count: this.state.count+1})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h1>{this.state.count}</h1> 
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.onLon}>An lon</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TestingComponent username="linh" age="30" children='dep trai'/>
            Chao mung den voi khoa hoc react JS
          </a>
        </header>
      </div>
    );
  }
 
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Reactfddsfdsffffffffffffffff aaaaaaaaaalon
//           dfddfgf
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
