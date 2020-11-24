import React, { Component } from "react";
import Link from "./Link";
import { Query } from "react-apollo";
import LINK_QUERY from "../graphql/queries/GetAllLinks";

class LinkList extends Component {
  render() {
    return (
      <Query query={LINK_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const linksToRender = data.allLinks;

          return (
            <div>
              {linksToRender.map((link) => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LinkList;
