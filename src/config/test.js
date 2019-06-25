// Copyright (c) 2018-2020 Double.  All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

const path = require('path')

module.exports = {
  name: 'Juglans V1.0',
  prefix: '/api/v1',
  port: 3001,
  debug: true,
  logger: {
    path: path.join(__dirname, '../../logger'),
    maxsize: 1024 * 5
  },
  sql: {
    uri: 'mysql://root:111111@/test',
    opts: {
      dialect: 'mysql'
    }
  },
  mongo: {
    uri: 'mongodb://127.0.0.1:27017/test?authSource=admin',
    retryCount: 5,
    opts: {
      useCreateIndex: true,
      useNewUrlParser: true,
      poolSize: 1000,
      reconnectTries: Number.MAX_VALUE
    }
  },
  redis: {
    uri: 'redis://127.0.0.1:6379',
    retryCount: 5,
    opts: {
      maxRetriesPerRequest: 3,
      retryStrategy: function (times) {
        return null
      }
    }
  },
  scan: {
    path: [
      path.join(__dirname, '../{models,routes,tasks,openapi}/**/*.js')
    ],
    ignore: [ '**/node_modules/**' ]
  },
  bodyParser: {
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    jsonLimit: '5mb',
    formLimit: '1mb',
    textLimit: '1mb',
    multipart: true,
    formidable: {
      keepExtensions: true,
      uploadDir: path.join(__dirname, '../../assets/public/upload')
    }
  }
}
