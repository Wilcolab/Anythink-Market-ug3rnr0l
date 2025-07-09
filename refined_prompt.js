function toCamelCase(str) {
  if (typeof str !== 'string') throw new TypeError("Input must be a string");
  return str
    .trim()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^./, firstChar => firstChar.toLowerCase());
}

// Tests
console.log(toCamelCase("hello world"));      // "helloWorld"
console.log(toCamelCase("  invalid-input  ")); // "invalidInput"
try { toCamelCase(null); } catch (e) { console.error(e.message); }