// original: https://codesandbox.io/s/busy-keldysh-9t62ef

/*

  If a=1, b=2, c=3, …………. z= 26, Input an alphanumeric string and calculate the sum of that string?
  Example:
  Input: Hello123
  Output: 58
  (Where h=8, e=5, l=12, l=12, o=15)

*/

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function findSumOfLetterNumericValues(phrase) {
  const sumOfLettersAndNumbers = phrase
    .split("")
    .map((character) => {
      const indexOfCharacter = letters.indexOf(character.toLowerCase());

      if (indexOfCharacter === -1) {
        return parseInt(character, 10);
      }

      return indexOfCharacter + 1;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return sumOfLettersAndNumbers;
}

document.getElementById("app").innerHTML = `${findSumOfLetterNumericValues(
  "Hello1234"
)}`;
