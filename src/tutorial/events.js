import readline from 'readline';
import fs from 'fs';

const rs = fs.createReadStream(`${__dirname}/test.txt`, 'utf-8');
const rl = readline.createInterface(rs, {});

// when find a \n, will fire 'line' EventEmitter
rl.on('line', line => {
  console.log('Read: ', line);
  rl.close();
});

// pipe() connects readable and writable streams
rs.pipe(process.stdout);

// use EventEmitter
rl.once('start', msg => {
  console.log(msg);
});
rl.prependListener('start', () => {
  console.log('Ready...');
});
rl.emit('start', 'Start!\n================');
