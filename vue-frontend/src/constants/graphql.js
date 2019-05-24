import gql from "graphql-tag";

export const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    links {
      id
      url
      description
    }
  }
`

export const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($description: String!, $url: String!) {
    createLink(
      description: $description,
      url: $url,
    ) {
      id
      url
      description
    }
  }
`


