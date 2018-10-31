// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './dev.sqlite3'
    }
  },


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
