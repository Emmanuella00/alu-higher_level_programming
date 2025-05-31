#!/usr/bin/node
exports.converter = function (base) {
  return function f (n, s) {
    if (s === undefined) s = '';
    if (n === 0) {
      return s === '' ? '0' : s;
    }
    return f(Math.floor(n / base), (n % base).toString(base) + s);
  };
};
