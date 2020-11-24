import { gql } from "apollo-boost";

const ADD_LINK = gql`
  mutation AddLink($slug: String!, $description: String!, $link: String!) {
    createLink(data: { slug: $slug, description: $description, link: $link }) {
      slug
      description
      link
    }
  }
`;

module.exports = ADD_LINK;
