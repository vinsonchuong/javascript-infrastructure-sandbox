const path = require('path');
const express = require('express');
const translate = require('express-systemjs-translate');

express()
  .use(translate())
  .use(express.static(path.resolve()))
  .listen(8080);
