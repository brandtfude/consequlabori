function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Usage
const value: unknown = "This is a string";

if (isString(value)) {
  console.log(value.toUpperCase()); // This is safe because 'value' is confirmed to be a string
}
