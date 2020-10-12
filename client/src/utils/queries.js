import gql from 'graphql-tag';

export const QUERY_ME = gql `

me{

_id
username
email
bookCount
savedBooks{
    bookId
    image
    link
    title
    authors
    description
}
}
}



`