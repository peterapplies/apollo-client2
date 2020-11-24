import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div>
        <div>{this.props.link.slug}</div>
        <div>{this.props.link.description}</div>
        <div>{this.props.link.link}</div>
      </div>
    );
  }
}

export default Link;
