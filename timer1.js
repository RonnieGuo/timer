const args = process.argv.slice(2);

const beep = function() {
  process.stdout.write('\x07');
};

const setTimer = function(time) {
  if (time && !isNaN(time) && time > 0) {
    setTimeout(() => {
      beep();
    }, time * 1000);
  }
};

for (let i = 0; i < args.length; i++) {
  setTimer(Number(args[i]));
}