const minimist = require('minimist')
const params = minimist(process.argv)
const dotenv = require('dotenv')
const path = `${__dirname}/${params.prod && params.prod === 'true'
    ? '.env'
    // : '.env'}`
    : '.env.develop'}`
// mirianSORAYA  1.3.6.1.4.1.37746.3.3 1721258331
const index = dotenv.config({ path }).parsed
module.exports = {
    db:{
        main: {
            host: index.DB_MAIN_HOST,
            port: index.DB_MAIN_PORT,
            database: index.DB_MAIN_DB,
            username: index.DB_MAIN_USER,
            password: index.DB_MAIN_PASSWD,
            dialect: index.DB_MAIN_DIALECT,
            logging: params.prod && params.prod === 'true' ? null : console.log,
            dialectOptions: {
                dateStrings: true,
                typeCast: true
            },
            pool: { maxConnections: 50, maxIdleTime: 3000, }
        },
    },
    apiConfig:{
        port: index.API_PORT,
        secret: index.API_SECRET,
        bsr: index.API_BSR,
        sessionTime: index.API_SESSION_TIME
    },
}