import './styles.scss';
import tools from './tools';

const shuffleButton = document.querySelector('#js-shuffle');
const sortButton = document.querySelector('#js-sort');
const linesTextArea = document.querySelector('#js-lines');

function getLines() {
  const text = linesTextArea.value;
  const lines = text.split('\n');

  return lines;
}

function setLines(lines) {
  const value = lines.join('\n');

  linesTextArea.value = value;
}

function runTask(taskFn) {
  const lines = getLines();

  const sortedLines = taskFn(lines);

  setLines(sortedLines);
}

shuffleButton.addEventListener('click', () => runTask(tools.shuffle));
sortButton.addEventListener('click', () => runTask(tools.sort));
