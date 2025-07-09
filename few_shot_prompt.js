function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^./, firstChar => firstChar.toLowerCase());
}

// Tests
console.log(toCamelCase("first name")); // "firstName"
console.log(toCamelCase("user_id"));    // "userId"
console.log(toCamelCase("SCREEN_NAME")); // "screenName"