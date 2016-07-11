import React, { Component } from 'react';

export default class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      dateShown: new Date()
    };
  }

  render () {
    return (
      <div>
      The time this page was loaded is:
      {this.state.dateShown.toString()}
      </div>
    );
  }
}
