'use strict'

import Express from 'express'
import Lambdafy from 'lambdafy'

var app = Lambdafy.fromExpress(express())
app.get('/', (req, res) => { res.status(200).send()})

exports.hello = app.handleRequest