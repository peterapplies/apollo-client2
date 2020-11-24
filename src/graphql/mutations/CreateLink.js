import { gql } from "apollo-boost";

const CREATE_LINK = gql`
  mutation CreateLink($slug: String!, $description: String!, $link: String!) {
    createLink(slug: $slug, description: $description, link: $link) {
      slug
      description
      link
    }
  }
`;

module.exports = CREATE_LINK;
