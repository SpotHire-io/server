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
import UserInput from './types/UserInput'

const authenticate = resolver => (source, args, context, info) => {
  if (context.user) {
    return resolver(source, args, context, info)
  }
  throw new Error('User is not authenticated')
}

var mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: User,
      args: {
        user: { type: UserInput },
      },
      resolve: authenticate(async (source, args, { db, user }, info) => {
        return db.saveUser(args.user)
      }),
    },
  },
})

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
      resolve: authenticate((source, args, { db, user }, info) => {
        return user
      }),
    },
  },
})

export default new GraphQLSchema({ query, mutation })
