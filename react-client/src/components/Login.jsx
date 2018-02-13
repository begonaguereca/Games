import React from 'react';
import LoginForm from './LoginForm.jsx';

const Login  = (props) => (
  <div>
    <div className="container-fluid">

      <div className="row">
        <div className="col col-sm-1">
        </div>

        <div className="col col-sm-10">
            <LoginForm/>
        </div>

        <div className="col col-sm-11">
        </div>
      </div>
    </div>
  </div>
)

export default Login;
