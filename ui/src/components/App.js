import React from 'react'
import Sidebar from './Sidebar'
import Switcher from './Switcher'
import styles from '../css/App'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink(),
  cache: new InMemoryCache(),
})

const App = () => (
  <ApolloProvider client={client}>
    <div className={styles.app}>
      <Sidebar />
      <Switcher />
    </div>
  </ApolloProvider>
)

export default App
