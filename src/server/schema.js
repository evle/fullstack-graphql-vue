import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

// Specify the types of data that expect from an endpoint here.
// Important! the fields below must be matched with target data
const typeDefs = `
    type Query {
        weather(city: String!): Weather 
    }

    type Weather {
        realtime: Realtime,
        weather: [Week],
        pm25: Pm25
    }

    type Week{
        week: String,
        info: Day
    }

    type Day{
        day: [String]
    }

    type Realtime {
        weather: Now,
        date: String,
        city_name: String
    }

    type Now{
        info: String,
        temperature: String
    }

    type Pm25 {
        key: String,
        pm25: Detail
    }
    type Detail {
        quality: String,
        des: String
    }
`

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export { schema };