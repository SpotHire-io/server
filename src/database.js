import { aql, Database } from 'arangojs'

const Connection = connection => {
  return {
    getUserByEmail: async email => {
      let query = aql`
      FOR user IN users
        FILTER user.email == ${email}
          RETURN user
      `
      let results = await connection.query(query)
      return results.next()
    },
    saveUser: async user => {
      let query = aql`
        UPSERT {email: ${user.email} }
          INSERT ${user}
          UPDATE ${user} IN users
          RETURN NEW
      `
      let results = await connection.query(query)
      return results.next()
    },
  }
}

export default Connection
