import game from '../engine.js';
import { getRandomNumber } from '../cli.js';

const gameTask = 'Find the greatest common divisor of given numbers.';
function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

const expression = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  return [firstNumber, secondNumber];
};

const question = () => {
  const [firstNumber, secondNumber] = expression();
  return [`${firstNumber} ${secondNumber}`, String(gcd(firstNumber, secondNumber))];
};

export default function brainGcd() {
  game(gameTask, question);
}
