module.exports = (str) => str.length < 40 ? str : str.slice(0, 40) + '...';
