import game from '../engine.js';
import { getRandomNumber } from '../cli.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  } for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  } return true;
};

const question = () => {
  const randomQuestionNumber = getRandomNumber(100);
  let answer = '';
  if (isPrime(randomQuestionNumber) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [randomQuestionNumber, answer];
};
export default function brainPrime() {
  game(gameTask, question);
}
