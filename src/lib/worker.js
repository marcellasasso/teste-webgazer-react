
const interval = setInterval(() => {
  postMessage({ interval: interval });
}, 1000 / 10);