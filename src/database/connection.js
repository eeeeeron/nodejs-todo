var knex = require('knex')({
    client: 'mssql',
    connection: {
        host: 'DESKTOP-IKKO9AI',
        user: 'onlinetutorial',
        password: 'online',
        database: 'todo',
        "options": {
            "enableArithAbort": true
        }
    }
});

//knex.on('query', console.log)

module.exports = knex