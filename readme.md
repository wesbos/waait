[![build status](https://api.travis-ci.org/wesbos/waait.svg?branch=master)](https://travis-ci.org/wesbos/waait/)

# Waait

Hold on a sec, or 7.

`wait()` Returns a promise that resolves after how many milliseconds you pass it.

Great for waiting any amount of time. If you do not pass it any value, it will immediately resolve. This is handy when you need to ensure the following code is put at the end of the JS event callstack.

## Usage

```js
import wait from 'waait';

async function doStuff() {
  doSomething();
  await wait();
  doSomethingElse();
  await wait(200);
  console.log('200ms later');
}

```
