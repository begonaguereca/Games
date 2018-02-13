import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import {BrowserRouter as Router, Link, Route, Switch, MemoryRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import Landing from './components/Landing.jsx';
// import Login from './components/Login.jsx';
import App from './components/App.jsx';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     }
//   }
//
//
//   render () {
//
//
//     return (
//     <div>
//       <Router >
//          <div>
//          <Route exact path='/'
//            render={() => <Landing/>}/>
//
//          <Route exact path='/Login'
//            render={() => <Login/>}/>
//          </div>
//        </Router>
//
//     </div>
//   )}
// }

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));


//ReactDOM.render(<App />, document.getElementById('app'));
