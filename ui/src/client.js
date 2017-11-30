import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// const middlewareLink = new HttpLink((operation, forward) => {
//   operation.setContext({
//     headers: {
//       authorization: `Bearer ${ token }`
//     }
//   });
//   return forward(operation)
// })
// 
// use with apollo-client
// const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache(),
})

export default client
