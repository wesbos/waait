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

test('should push the event to the end of event callstack even with wait time 0', t => {
  t.plan(1);
  const track = [];
  wait(0).then(_ => {
    track.push('c');
    t.deepEqual(['a', 'b', 'c'], track);
  })
  track.push('a');
  track.push('b');
});
