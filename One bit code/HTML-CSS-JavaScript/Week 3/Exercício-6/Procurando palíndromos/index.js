const word_verification = prompt(
  "Welcome to the palindrome verifier\nEnter the word to verify",
  ""
);
let word_inverted = "";

for (let i = word_verification.length - 1; i >= 0; i--) {
  word_inverted += word_verification[i];
}
if (word_verification === word_inverted) {
  alert(
    `It is a polindrome word!\nThe word ${word_verification} inverted stay the same ${word_inverted}`
  );
} else {
  alert(
    `It is not a polindrome word!\nThe word ${word_verification} inverted change ${word_inverted}`
  );
}
