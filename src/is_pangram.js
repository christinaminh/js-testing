const { TestScheduler } = require("jest");

const isPangram = function(text) {
  const alphabet = 'abcdefghijklkmnopqrstuvwxyz'

  const lettersUsed = {};

  for (const letter of text) {
    if (!lettersUsed[letter]) {
      lettersUsed[letter] = true;
    }
  }

  for (const letter of alphabet) {
    if (!lettersUsed[letter]) {
      return false;
    }
  }

  return true;
};

module.exports = isPangram;

isPangram('text');