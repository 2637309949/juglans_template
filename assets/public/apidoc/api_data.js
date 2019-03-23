define({ "api": [
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
    "filename": "src/routes/index.js",
    "groupTitle": "Test",
    "name": "GetHello"
  },
  {
    "type": "get",
    "url": "/user/aux/manager",
    "title": "用户角色",
    "group": "Test",
    "description": "<p>有Token验证机制</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n {\n     \"isManager\": true,\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/user.js",
    "groupTitle": "Test",
    "name": "GetUserAuxManager"
  }
] });
