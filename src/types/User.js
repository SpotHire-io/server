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
  })
})

export default User
