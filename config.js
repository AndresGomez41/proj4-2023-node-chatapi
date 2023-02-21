const configs = {
  api:{
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost:3000',
    nodeEnv: process.env.NODE_ENV || 'development'
  },
  db:{
    development:{
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chatDB2023',
      define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true
      }
    },
    production:{
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chatDB2023',
      define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    },
    testing:{
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chatDB2023',
      define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true
      }
    }
  }
}

module.exports = configs