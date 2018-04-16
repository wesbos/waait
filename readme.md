# Waait

Hold on a sec, or 7.

`waait()` Returns a promise that resolves after how many milliseconds you pass it.

Great for waiting any amount of time. If you do not pass it any value, it will immediately resolve. This is handy when you need to ensure the following code is put at the end of the JS event callstack.

## Usage

```js
import waait from 'waait';

async function doStuff() {
  doSomething();
  await waait();
  doSomethingElse();
  await waait(200);
  console.log('200ms later');
}

```
