import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql'
import User from './types/User'

var query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      args: {
        email: {
          description: 'the email of the user',
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      type: User,
      resolve: (source, args, { db }, info) => {
        return db.getUserByEmail(args.email)
      },
    },
  },
})

export default new GraphQLSchema({ query })
