#!/usr/bin/env node
'use strict';

const mdoc = require('../lib/index.js');
var argv = require('minimist')(process.argv.slice(2));
var cmd = argv._;

switch(cmd[0]) {
  case "init":
    return mdoc.generator.init()
  case "start":
    return mdoc.start()
  default:
    console.log("run 'mdoc help' for command line documatation");
    return null;
}