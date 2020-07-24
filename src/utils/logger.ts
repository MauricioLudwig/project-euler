import chalk from 'chalk';

export const success = (msg: string) => console.log(chalk.green(msg));
export const danger = (msg: string) => console.log(chalk.red(msg));
export const end = () => console.log(chalk.magenta('Program finished!'));
