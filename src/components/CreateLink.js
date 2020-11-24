import React, { Component } from "react";
import CREATE_LINK from "../graphql/mutations/CreateLink";
import { Mutation } from "react-apollo";

class CreateLink extends Component {
  state = {
    slug: "",
    description: "",
    link: ""
  };

  render() {
    const { slug, description, link } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={slug}
            onChange={(e) => this.setState({ slug: e.target.value })}
            type="text"
            placeholder="A super short description for the link"
          />
          <input
            className="mb2"
            value={description}
            onChange={(e) => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={link}
            onChange={(e) => this.setState({ link: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          mutation={CREATE_LINK}
          variables={{ slug, description, link }}
        >
          {(createLink) => <button onClick={createLink}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
