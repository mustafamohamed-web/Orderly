const { config } = require('dotenv')

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` })

exports.PORT = process.env.PORT || 3000
exports.NODE_ENV = process.env.NODE_ENV || 'development'
exports.MONGODB_URI = process.env.MONGODB_URI 
