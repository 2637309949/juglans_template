define({ "api": [
  {
    "type": "get",
    "url": "/helloMq",
    "title": "Queue接口",
    "group": "Queue",
    "description": "<p>有Token验证机制</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n {\n     \"message\": 'ok'\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/mq.js",
    "groupTitle": "Queue",
    "name": "GetHellomq"
  },
  {
    "type": "get",
    "url": "/hello",
    "title": "验证接口",
    "group": "Test",
    "description": "<p>有Token验证机制</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n {\n     \"message\": 'hello:test'\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hello.js",
    "groupTitle": "Test",
    "name": "GetHello"
  }
] });
