function toCamelCase(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

// Test
console.log(toCamelCase("hello world"));