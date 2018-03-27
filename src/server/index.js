import cors from 'cors'
import express from 'express'
const app = express()
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express'
import bodyParser from 'body-parser'
import path from 'path'
import { schema } from './schema'

const PORT = process.env.port || 7700;

// app.use('*', cors({ origin: 'http://localhost:7700' })); //Restrict the client-origin for security reasons.
app.use(cors())
// Serve the client html on /
app.use('/', express.static(path.join(`${__dirname}/../client`)))
// bodyParser.urlencoded({ extended: true })
app.use('/graphql',  bodyParser.json(), graphqlExpress({
  schema
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

app.listen(PORT, () =>
    console.log(`\x1b[32mServer on! LISTENING ON http://localhost:${PORT}`)
)