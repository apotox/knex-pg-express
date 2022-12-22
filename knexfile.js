
const common = {
    migrations: {
        tableName: "migrations",
        directory: "migrations"
    }
}

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.PG_CONNECTION_STRING || "postgresql://localhost:5432/safi" ,
        ...common
    },
    production: { 
        client: 'pg', 
        connection: process.env.PG_CONNECTION_STRING ,
        ...common
    },
};