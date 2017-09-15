const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
} = require('graphql')

const { GraphQLEmail, GraphQLURL } = require('graphql-custom-types')

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

module.exports.default = UserInput
