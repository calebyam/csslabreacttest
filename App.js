import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };
  }

    //handler goes here

  handleClick = () => {
    this.setState(prevState => ({buttonClicked: !prevState.buttonClicked}));
}


  render() {
    const buttonText = this.state.buttonClicked ? 'thanks' : 'click me';
    return (
      <div>
        <p>Greetings!</p>
        <button onClick={this.handleClick}> {buttonText}</button>
      </div>
    );
  }
}


