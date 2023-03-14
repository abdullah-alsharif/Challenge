const challenge = require("./exercise.js");

test('test', () => {
  let throwed = false, error;
  try {
    challenge();
  } catch (err) {
    throwed = true;
    error = err;
  }
  expect(throwed).toBe(true);
  expect(error instanceof Error).toBe(true);
  expect(error.message).toBe("Successful throw!");

  expect(challenge.toString()).not.toMatch(
    /require|Function|eval|throw|Error|\\|assert/
  );
}
);
