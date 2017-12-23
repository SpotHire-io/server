import React from 'react'
import Sidebar from './Sidebar'
import Switcher from './Switcher'
import styles from '../css/App'
import { ApolloProvider } from 'react-apollo'
import client from '../client'

const App = () => (
  <ApolloProvider client={client}>
    <div className={styles.app}>
      <Sidebar />
      <Switcher />
    </div>
  </ApolloProvider>
)

export default App
