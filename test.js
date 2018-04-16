const wait = require('./');
const test = require('tape');

test('should be promise', t => {
  t.plan(1);
  t.equal(typeof wait().then, 'function');
});
