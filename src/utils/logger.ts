import chalk from 'chalk';

export const success = <T>(msg: T) => console.log(chalk.green(msg));

export const highlight = <T>(msg: T) => console.log(chalk.yellow(msg));

export const danger = <T>(msg: T) => console.log(chalk.red(msg));

export const end = () => console.log(chalk.magenta('Program finished!'));

export const logPerformance = (t2: number, t1: number) =>
  highlight(`Time to execute (in seconds): ${Math.ceil((t2 - t1) / 1000)}`);
