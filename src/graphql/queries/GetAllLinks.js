import { gql } from "apollo-boost";

const LINK_QUERY = gql`
  {
    allLinks {
      slug
      description
      link
    }
  }
`;

module.exports = LINK_QUERY;
