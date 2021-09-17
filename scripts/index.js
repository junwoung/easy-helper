#!/usr/bin/env node

const { program } = require('commander');

const newReactFile = require('./newReactFile');

program.command('new-react-file').action(() => {
  newReactFile();
});

program.parse(process.argv);
