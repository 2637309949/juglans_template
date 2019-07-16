// Copyright (c) 2018-2020 Double.  All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

const model = require('./Model')
const SeqExt = require('../../addition').SeqExt
const Sequelize = require('../../addition').Sequelize
const logger = require('../../addition').logger
// defineSchema defined user model
const defineSchema = SeqExt.DefineSchema(model, {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '名称'
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '密码'
  },
  age: {
    type: Sequelize.INTEGER,
    comment: '年龄'
  },
  birthday: {
    type: Sequelize.DATE,
    comment: '出生日期'
  },
  mobile: {
    type: Sequelize.STRING,
    comment: '手机号码'
  },
  email: {
    type: Sequelize.STRING,
    comment: '邮件'
  }
})

// Register defined Register user model
const User = SeqExt.Register({
  schema: defineSchema,
  name: 'user',
  displayName: '用户',
  autoHook: false,
  opts: {
    routeHooks: {
      list: {
        pre (ctx) {
          logger.info('User model pre hook')
        }
      }
    }
  }
})

User.belongsTo(User, {foreignKey: '_creator', as: 'creator'})
User.belongsTo(User, {foreignKey: '_updator', as: 'updator'})

module.exports = ({ router, events }) => {
  // routes: api/v1/mgo/user
  SeqExt.api.List(router, 'user')
    .Post(async function (ctx) {
      logger.info('User model post hook')
    })
    .Auth(ctx => true)
  // routes: api/v1/mgo/feature1/user
  SeqExt.api.Feature('feature1').List(router, 'user')
  // routes: api/v1/mgo/feature1/subFeature1/user
  SeqExt.api.Feature('feature1').Feature('subFeature1').List(router, 'user')
  // routes: api/v1/mgo/custom/user
  SeqExt.api.Feature('feature1').Feature('subFeature1').Name('custom').List(router, 'user')
  SeqExt.api.One(router, 'user')
  SeqExt.api.Delete(router, 'user')
  SeqExt.api.Update(router, 'user')
  SeqExt.api.Create(router, 'user')
}

module.exports.User = User
