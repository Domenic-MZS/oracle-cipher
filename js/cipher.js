const __WORDS_MAP = {
  a: "enter",
  e: "imes",
  i: "ai",
  o: "abor",
  u: "ufat",
};

function cipher(text) {
  if (typeof text !== "string") return "";

  return text.replace(/[a-z]/gi, (match) => {
    let isUppercase = match === match.toUpperCase();
    let match = __WORDS_MAP[match.toLowerCase()] ?? match;

    return isUppercase ? match.toUpperCase() : match;
  });
}

function decipher(text) {
  if (typeof text !== "string") return "";

  var result = text;
  for (let key in __WORDS_MAP) {
    let value = __WORDS_MAP[key];
    let pattern = RegExp(value, "gi");

    result = result.replace(pattern, (match) =>
      match === match.toUpperCase() ? key.toUpperCase() : key
    );
  }

  return result;
}

export { cipher, decipher };
