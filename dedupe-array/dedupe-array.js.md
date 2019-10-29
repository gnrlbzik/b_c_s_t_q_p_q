# JavaScript De-Dupe Array

## Problem

Remove duplicates from array

## Assumptions

- solutions are written in vanilla es6 javascript
- we only checking for equality of strings and numbers
- feel free to run in node or in dev tools of chrome/firefox/safari (make sure that es6 related flags are turned on)
- simple set of unit tests provided

## Solution should

Remove duplicates from array. Solution would only remove duplicate strings and numbers

## Data samples to use

```
const SAMPLE_INPUT_DATA = [1, 2, 'COOL', 'FOR', 'many', 'AWESOME', 'cool', 'COOL', 2, 3];
const SAMPLE_OUTPUT_DATA = [1, 2, 'COOL', 'FOR', 'many', 'AWESOME', 'cool', 3];
```

## Bootstrapping

Some code

```
function removeDuplicatesInArray (array) {
  // add remove duplicates code here
}
```

## Tests

Use following test runner to test your work

```
function it (itShouldMessage, callback) {
  console.log('\n');
  console.log(`IT ${itShouldMessage}`);
  callback();
}

function assertionToBeTrue (assertionMessage, calculatedValue, expectedResult) {
  const isTrue = calculatedValue === expectedResult;
  const passedOrFailedMessage = (isTrue ? 'PASSED' : 'FAILED');
  console.log(`${passedOrFailedMessage} - ${assertionMessage}`);
  if (!isTrue) {
    console.log('Received: ', calculatedValue);
    console.log('Expected: ', expectedResult);
  }
}

(function runTests () {

  it('should remove duplicates when passing array to removeDuplicatesInArray', () => {
    const deDupedArray = removeDuplicatesInArray(SAMPLE_INPUT_DATA);
    assertionToBeTrue(`Should have length of ${SAMPLE_OUTPUT_DATA.length}`, deDupedArray.length, SAMPLE_OUTPUT_DATA.length);
    // if we have time, we should few other simple checks
  });

  console.log('\n');
})();
```
