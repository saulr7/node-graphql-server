require('dotenv').config()
const startApolloServer = require('./server/server')

const PORT = process.env.PORT || 3000

startApolloServer(PORT)
