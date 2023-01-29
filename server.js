const express = require('express');
const expressGraphQL = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');
const app = express();

const BookType = new GraphQLObjectType({
    name: 'Books',
    descript: 'AUthor is a bot'
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Degraded',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Braindead'
            }
        })
    })
})

const books = [
    {"ArtikelKey": "00002-NV|0|0|NULL", "ArtikelNr": "00002-NV"},
    {"ArtikelKey": "00003-NV|0|0|NULL", "ArtikelNr": "00003-NV",},
    {"ArtikelKey": "00004-NV|0|0|NULL", "ArtikelNr": "00004-NV"},
    {"ArtikelKey": "00005-NV|0|0|NULL", "ArtikelNr": "00005-NV"},
    {"ArtikelKey": "00006-NV|0|0|NULL", "ArtikelNr": "00006-NV"},
    {"ArtikelKey": "00007-NV|0|0|NULL", "ArtikelNr": "00007-NV"}
];

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        books: {
            type: BookType,
            description: 'List of Books',
            resolve: () => books
        }
    })
})

app.use('/graphql', expressGraphQL.graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(5000, () => console.log('...running'));