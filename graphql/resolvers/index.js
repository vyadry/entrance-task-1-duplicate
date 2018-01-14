const GraphQLDate = require('graphql-date');

const query = require('./query');
const mutation = require('./mutation');

module.exports = function resolvers () {
  return {
    Query: query,

    Mutation: mutation,

    Event: {
      users (event) {
       return event.getUsers();//добавил return
      },
      room (event) {
       return event.getRoom();//добавил return
      }
    },

    Date: GraphQLDate
  };
};
