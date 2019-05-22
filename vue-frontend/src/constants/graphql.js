import gql from 'graphql-tag'

export const ALL_LINKS_QUERY = gql`
  query ALL_LINKS_QUERY {
    links {
      id
      url
      description
    }
  }
`
