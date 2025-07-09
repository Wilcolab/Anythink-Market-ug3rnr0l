function toKebabCase(str) {
  // Step 3: Validation
  if (typeof str !== 'string') throw new TypeError("Input must be a string");

  return str
    .trim()                   // Step 3: Trim
    .toLowerCase()            // Step 2: Normalize
    .replace(/[^\w\s-]/g, '') // Step 2: Clean special chars
    .replace(/[\s_]+/g, '-')  // Steps 1+2: Unify separators
    .replace(/-+/g, '-');     // Step 3: Deduplicate
}

// Tests
console.log(toKebabCase("Hello World"));    // "hello-world"
console.log(toKebabCase("user_name"));      // "user-name"
console.log(toKebabCase("Invalid@Chars"));  // "invalidchars"
try { toKebabCase(123); } catch (e) { console.error(e.message); }