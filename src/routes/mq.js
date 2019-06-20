// Copyright (c) 2018-2020 Double.  All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.
const logger = require('../addition').logger

/**
   * @api {get} /mq MQ接口
   * @apiGroup MQ
   * @apiDescription 有Token验证机制
   * @apiSuccessExample {json}
   *   HTTP/1.1 200 OK
   *    {
   *        "message": 'ok'
   *    }
   */
function mq ({ router, MQ }) {
  MQ.Register('mqTest', function (form) {
    logger.info(JSON.stringify(form))
  })
  router.get('/mq', (ctx, next) => {
    MQ.Push({ type: 'mqTest', body: { 'xx': 'xx' } })
    ctx.body = {
      'message': 'ok'
    }
  })
}

module.exports = function ({ MQ, reverse, router }) {
  MQ.addTactics('mqTest', { interval: 10, ctCount: 1 })
  reverse.Register(mq)
}
