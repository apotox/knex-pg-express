module.exports = {
    development: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING ,
        migrations: {
            tableName: "migrations",
            directory: "migrations"
        }
    },
    production: { 
        client: 'pg', 
        connection: process.env.PG_CONNECTION_STRING ,
        migrations: {
            tableName: "migrations",
            directory: "migrations"
        }
    },
    
};