/**
 * @author [author]
 * @email [example@mail.com]
 * @create date 2019-01-12 01:24:38
 * @modify date 2019-01-12 01:24:38
 * @desc [description]
 */
module.exports = function ({ router, test }) {
  /**
     * @api {get} /hello 验证接口
     * @apiGroup Test
     * @apiDescription 有Token验证机制
     * @apiSuccessExample {json}
     *   HTTP/1.1 200 OK
     *    {
     *        "errcode": null,
     *        "errmsg": null,
     *        "data": "hello:test"
     *    }
     */
  router.get('/hello', (ctx, next) => {
    ctx.body = 'hello:' + test
  })
}