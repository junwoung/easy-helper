const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');

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
    console.error(chalk.red('文件名必填！'));
    return;
  }

  fs.readFile(path.resolve('./templates/reactFile.tpl'), (err, data) => {
    if (err) {
      console.error('文件读取失败：', err);
      return;
    }
    const contentStr = data.toString();
    const finalStr = contentStr.replace(/{{ NAME }}/g, `${answers.fileName}`);

    fs.mkdir(answers.path, { recursive: true }, (err) => {
      if (err) {
        console.error('创建文件夹失败：', err);
        throw err;
      }

      const filePath =
        path.resolve(answers.path) + '/' + answers.fileName + '.tsx';

      fs.writeFile(filePath, finalStr, {}, (err) => {
        if (err) {
          console.error('写入文件失败：', err);
        }
        console.log(chalk.green('创建成功，文件位于：', filePath));
      });
    });
  });
};

module.exports = newReactFile;
