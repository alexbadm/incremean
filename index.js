'use strict';
module.exports = function incremean () {
  var aver = 0;
  var counter = 0;
  return function () {
    for (var i = 0; i < arguments.length; i++) {
      aver = (aver * counter + arguments[i]) / ++counter;
    }
    return aver;
  };
};