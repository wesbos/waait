import wait from './index';

test('should be promise', () => {
  expect(typeof wait().then).toEqual('function');
});

test('should wait', () => {
  const track: string[] = [];
  wait(10).then(_ => {
    track.push('b');
    expect(track).toEqual(['a', 'b']);
  })
  track.push('a');
});
