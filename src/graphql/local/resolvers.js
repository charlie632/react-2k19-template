const resolvers = {
  Query: {},
  Mutation: {
    updateMEssage: (_, { message }, { cache }) => {
      cache.writeData({
        data: {
          helloWorld: {
            __typename: "helloWorld",
            message
          }
        }
      });
      return null;
    }
  }
};

export default resolvers;
