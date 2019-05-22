import gql from "graphql-tag";

export const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    links {
      id
      url
      description
    }
  }
`;
