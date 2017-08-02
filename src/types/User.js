import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const User = new GraphQLObjectType({
  name: 'User',
  description: '',
  fields: () => ({
    email: {
      type: GraphQLString,
      description: 'the users email'
    },
    lastName: {
      type: GraphQLString,
      description: 'the users family name'
    },
    firstName: {
      type: GraphQLString,
      description: 'the users given name'
    },
    phone: {
      type: GraphQLString,
      description: 'the users phone number'
    },
  })
})

export default User
