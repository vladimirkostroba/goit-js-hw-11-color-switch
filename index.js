const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-set = "onStart-js"]'),
  stopBtn: document.querySelector('button[data-set = "onStop-js"]'),
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

function onStartClick() {
  refs.startBtn.disabled = true;
  timerId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length);
    document.body.style.backgroundColor = colors[randomColor];
  }, 1000);
}

function onStopClick() {
  refs.startBtn.disabled = false;
  clearInterval(timerId);
}
