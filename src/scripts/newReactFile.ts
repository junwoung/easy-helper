import * as fs from 'fs';
import * as path from 'path';
import * as inquirer from 'inquirer';
import * as chalk from 'chalk';

import genComponentTemplate from '../templates/reactComponent';

const newReactFile = async () => {
  const answers: any = await inquirer.prompt([
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

  const contentStr = genComponentTemplate(answers.fileName);

  fs.mkdir(answers.path, { recursive: true }, (err) => {
    if (err) {
      console.error('创建文件夹失败：', err);
      throw err;
    }

    const filePath =
      path.resolve(answers.path) + '/' + answers.fileName + '.tsx';

    fs.writeFile(filePath, contentStr, {}, (err) => {
      if (err) {
        console.error('写入文件失败：', err);
      }
      console.log(chalk.green('创建成功，文件位于：', filePath));
    });
  });
};

export default newReactFile;