import React from 'react';
import axios from 'axios';

class LoginThing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
handleSubmit() {
  event.preventDefault();
}

handleChangeEmail(event) {
  this.setState({email: event.target.value});
}

handleChangePass(event) {
  this.setState({password: event.target.value});
}


handleClick() {
  console.log('inside handle Click')
  axios.post('/login', {
    email: 'Fred',
    password: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    alert('Sorry there is an error:',error);
  });
}

render() {
  return(
    <div>
      <h1>Log Yourself in....</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={this.state.email} onChange={this.handleChangeEmail}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChangePass}/>
        </div>

        <button onClick={this.handleClick} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )};
}








export default LoginThing;
