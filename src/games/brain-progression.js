/* eslint-disable no-param-reassign */
import game from '../engine.js';
import { getRandomNumber } from '../cli.js';

const gameTask = 'What number is missing in the progression?';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
const expression = () => {
  const randomSum = getRandomNumber(10);
  const randomLength = getRandomInt(5, 15);
  const arrayExpression = Array.from({
    length: Math.ceil(randomLength),
  }, (_, i) => (i + 1) * randomSum);
  const randomItem = arrayExpression[Math.floor(Math.random() * arrayExpression.length)];
  arrayExpression[arrayExpression.indexOf(randomItem)] = '..';
  const expressionString = arrayExpression.join(' ');
  return [expressionString, String(randomItem)];
};

export default function brainProgression() {
  game(gameTask, expression);
}
