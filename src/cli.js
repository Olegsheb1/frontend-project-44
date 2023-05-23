import readlineSync from 'readline-sync';

export default function askForName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export const getRandomNumber = (number = 100) => Math.floor(Math.random() * number);
