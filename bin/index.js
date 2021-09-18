#!/usr/bin/env node

const { program } = require('commander');

const newReactFile = require('../lib/scripts/newReactFile.js').default;

program.command('new-react-file').action(() => {
  newReactFile();
});

program.parse(process.argv);
