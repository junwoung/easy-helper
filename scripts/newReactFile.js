const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const plop = require('plop');

const newReactFile = async () => {
  const answers = await inquirer.prompt([
    {
      name: 'fileName',
      message: '请输入文件名：',
      type: 'input',
    },
    {
      name: 'path',
      message: '生成文件所处文件夹：',
      type: 'input',
      default: './src',
    },
  ]);

  if (!answers.fileName) {
    console.log(chalk.red('文件名必填！'));
    return;
  }

  fs.readFile(path.resolve('./templates/reactFile.tpl'), (err, data) => {
    if (err) {
      return;
    }
    const contentStr = data.toString();
    const finalStr = contentStr.replace(/{{ NAME }}/g, `${answers.fileName}`);

    fs.writeFile(path.resolve(answers.path) + '.tsx', finalStr, {}, (err) => {
      console.log('err: ', err);
    });
    console.log(finalStr);
  });
};

newReactFile();
