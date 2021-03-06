// Copyright (c) 2018-2020 Double.  All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

const model = require('./Model')
require('./User')
require('./Property')

const { SeqExt, Sequelize, logger } = require('../../addition')

const schema = model.Schema({
  name: {
    type: Sequelize.STRING,
    comment: '名称'
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    comment: '编码'
  }
})

SeqExt.Register({
  name: 'Param',
  displayName: '参数配置',
  autoHook: true,
  schema,
  opts: {
    routeHooks: {
      one: {
        cond: function (cond, ctx, info) {
          return cond
        }
      },
      list: {
        cond: function (cond, ctx, info) {
          return cond
        }
      }
    }
  }
})

const Property = SeqExt.Model('Property')
const Param = SeqExt.Model('Param')
const User = SeqExt.Model('User')

Param.addEnum = async function ({ model: m, key, value }) {
  try {
    const Param = SeqExt.Model('Param')
    const Property = SeqExt.Model('Property')
    const [instance] = await Param.findOrCreate({
      where: { code: 'enum' },
      defaults: model.withPreset({
        code: 'enum',
        name: '枚举类型'
      })
    })
    await Promise.all(value.map(async x => {
      const [i] = await Property.findOrCreate({
        where: { category: m, sub_category: key },
        defaults: model.withPreset({
          param_id: instance.id,
          category: m,
          sub_category: key,
          key: x.key,
          value: x.value,
          ...x
        })
      })
      return i
    }))
  } catch (error) {
    logger.error(error.stack || error.message)
    throw error
  }
}

Param.belongsTo(User, {foreignKey: '_creator', as: 'creator'})
Param.belongsTo(User, {foreignKey: '_updator', as: 'updator'})
Param.hasMany(Property, {foreignKey: 'param_id', sourceKey: 'id', as: 'value'})
