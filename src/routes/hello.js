// Copyright (c) 2018-2020 Double.  All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

/**
   * @api {get} /hello 验证接口
   * @apiGroup Test
   * @apiDescription 有Token验证机制
   * @apiSuccessExample {json}
   *   HTTP/1.1 200 OK
   *    {
   *        "message": 'hello:test'
   *    }
   */
function hello ({ router }) {
  router.get('/hello', (ctx, next) => {
    ctx.body = {
      message: 'hello:' + test
    }
  })
}

function helloEvent ({ router, test, events, reverse }) {
  events.on('hello', function (message) {
    console.log(message)
  })
  events.emit('hello', 'first message')
}

module.exports = function ({ router, test, events, reverse }) {
  reverse.Register(hello)
  reverse.Register(helloEvent)
}