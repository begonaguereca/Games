import React from 'react';

class LoginThing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
handleSubmit() {
  event.preventDefault();
}

handleChange(event) {
  this.setState({email: event.target.value});
  console.log(this.state.email);
}

handleClick() {

}

render() {
  return(
    <div>
      <h1>Log Yourself in....</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <button onClick={this.handleClick} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )};
}








export default LoginThing;
