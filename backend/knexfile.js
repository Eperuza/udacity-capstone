// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '172.17.0.1',
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB,
    }
  },
  staging: {
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB,
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
