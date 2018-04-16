const wait = require('./');
const test = require('tape');

test('should be promise', t => {
  t.plan(1);
  t.equal(typeof wait().then, 'function');
});

test('should wait', t => {
  t.plan(1);
  const track = [];
  wait(10).then(_ => {
    track.push('b');
    t.deepEqual(['a', 'b'], track);
  })
  track.push('a');
});
