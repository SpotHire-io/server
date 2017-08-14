import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql'

import { GraphQLEmail, GraphQLURL } from 'graphql-custom-types'

let UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLEmail),
    },
    imageSrc: {
      type: GraphQLURL,
    },
    phone: {
      type: GraphQLString,
    },
    emergencyContactInformation: {
      type: GraphQLString,
    },
  }),
})

export default UserInput
