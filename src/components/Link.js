import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <section>
        <div>
          {this.props.link.slug}
          <br />
          {this.props.link.description}
          <br />
          {this.props.link.link}
        </div>
      </section>
    );
  }
}

export default Link;
