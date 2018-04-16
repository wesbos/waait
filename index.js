const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

module.exports = wait;
