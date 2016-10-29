# Lambdafy
Turns Express into an AWS Lambda web framework.

```js
import Express from 'express'
import Lambdafy from 'lambdafy'

var app = Lambdafy.fromExpress(express())
app.get('/', (req, res) => { res.status(200).send()})

exports.handler = app.handleRequest
```

## Installation

```bash
$ npm install lambdafy --save
```

## Features

 * still heavily under construction - assume nothing works
 * source code is a mess

## How does it work

Lambdafy overrides Express to bypass `Node.Http` and `pillarjs/send` to handle request/response. Instead, it creates a thin adapter that convers to/from API Gateway Proxy Integration request/response objects.

## License
All rights reserved.

