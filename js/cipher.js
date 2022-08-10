const __WORDS_MAP = {
  "a": "enter",
  "e": "imes",
  "i": "ai",
  "o": "abor",
  "u": "ufat",
}

function cipher(text) {
  if(typeof(text) !== 'string') return "";

  var result = "";
  for (let i = 0; i < text.length; i++) {
    // get character
    let character = text[i];

    // check case
    let isUppercase = character === character.toUpperCase();

    // if it's uppercase keep uppercase else return as it is
    character = __WORDS_MAP[character.toLowerCase()] || character;

    result += isUppercase ? character.toUpperCase() : character;
  }

  return result;
}

function decipher(text) {
  if(typeof(text) !== 'string') return "";

  var result = text;
  for(var key in __WORDS_MAP) {
    var value = __WORDS_MAP[key];

    result = result.replaceAll(value, key);
    result = result.replaceAll(value.toUpperCase(), key.toUpperCase())
  }

  return result;
}

export {cipher, decipher};
