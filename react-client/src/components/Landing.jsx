import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { withRouter} from 'react-router-dom';

class Landing extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {

    return (
      <div>
        <div className="container-fluid">

          <div className="row">
            <div className="col col-sm-12">
              <h1 className="text-center display-1 header-enter">Enter if you Dare</h1>
            </div>
          </div>

          <div className="row">
            <div className="col col-sm-12">
              <Link to='/Login'>
              <button type="button" className="btn btn-primary btn-lg btn-block">Login</button>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col col-sm-12">
            <Link to='/Signup'>
            <button type="button" className="btn btn-secondary btn-lg btn-block">Sign-Up</button>
          </Link>
        </div>
      </div>

    </div>
  </div>
)};
}



export default Landing;
