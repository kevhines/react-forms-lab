import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      callback: this.props.handleLogin
    };
  }

  handleLogin(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })

  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      this.state.callback(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleLogin(event)} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleLogin(event)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
