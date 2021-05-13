import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
      remainingChar: this.props.maxChars
    };
  }

  handleTweet(e) {
    this.setState({
      tweet: e.target.value,
      remainingChar: this.state.remainingChar - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTweet(event)} value={this.state.tweet} />
        <div>{this.state.remainingChar}</div>
      </div>
    );
  }
}

export default TwitterMessage;
