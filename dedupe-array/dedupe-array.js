/* 
# Problem

- remove duplicates from array

# Assumptions

- solutions are written in vanilla es6 javascript
- we only checking for equality of strings and numbers
- feel free to run in node or in dev tools of chrome/firefox/safari (make sure that es6 related flags are turned on)
- simple set of unit tests provided

# Descriptions

There are multiple ways to de-dupe array, following few are documented here:

*/


/* DATA SET */

const SAMPLE_INPUT_DATA = [1, 2, 'COOL', 'FOR', 'many', 'AWESOME', 'cool', 'COOL', 2, 3];
const SAMPLE_OUTPUT_DATA = [1, 2, 'COOL', 'FOR', 'many', 'AWESOME', 'cool', 3];

/* IMPLEMENTATIONS */

/* Implementation using Set */
function removeDuplicatesInArrayWithSet (array) {
  /* INFO: 
  Removing duplicates with set (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and spread operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
  
  Pros:

  Cons:
  
  */

  const deDupedArray = new Set(array);
  return [ ...deDupedArray ];
  
  /* Bonus Points -> Could be simplified into one liner */
  // return [ ...new Set(array) ];
}

/* Implementation using filter */
function removeDuplicatesInArrayWithFilter (array) {
  /* INFO: 
  Removing duplicates with filter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and indexOf (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
  
  Pros:

  Cons:
  
  */

  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  })

}

/* Implementation using reduce */
function removeDuplicatesInArrayWithReduce (array) {
  /* INFO: 
  Removing duplicates with reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) and includes (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
  
  Pros:

  Cons:
  
  */

  return array.reduce((accumulator, item) => {
    return accumulator.includes(item) ? accumulator : [...accumulator, item];
  }, []);
}

/* Implementation using loop */
function removeDuplicatesInArrayWithLoop (array) {
  /* INFO: 
  Removing duplicates with loop
  
  Pros:

  Cons:
  
  */
  const deDupedArray = [];

  array.forEach((item, index) => {
    if (deDupedArray.indexOf(item) === -1) {
      deDupedArray.push(item);
    }
  });

  return deDupedArray;
}

/* TESTS */

function it (itShouldMessage, callback) {
  console.log('\n')
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

  it('should filter out exact duplicates when passing array to removeDuplicatesInArrayWithSet', () => {
    const deDupedArray = removeDuplicatesInArrayWithSet(SAMPLE_INPUT_DATA);
    assertionToBeTrue(`Should have length of ${SAMPLE_OUTPUT_DATA.length}`, deDupedArray.length, SAMPLE_OUTPUT_DATA.length);
    assertionToBeTrue('Should have matching values at index 0', deDupedArray[0], SAMPLE_OUTPUT_DATA[0]);
    assertionToBeTrue('Should have matching values at index 4', deDupedArray[4], SAMPLE_OUTPUT_DATA[4]);
    assertionToBeTrue('Should have matching values at index 7', deDupedArray[7], SAMPLE_OUTPUT_DATA[7]);
  });

  it('should filter out exact duplicates when passing array to removeDuplicatesInArrayWithFilter', () => {
    const deDupedArray = removeDuplicatesInArrayWithFilter(SAMPLE_INPUT_DATA);
    assertionToBeTrue(`Should have length of ${SAMPLE_OUTPUT_DATA.length}`, deDupedArray.length, SAMPLE_OUTPUT_DATA.length);
    assertionToBeTrue('Should have matching values at index 0', deDupedArray[0], SAMPLE_OUTPUT_DATA[0]);
    assertionToBeTrue('Should have matching values at index 4', deDupedArray[4], SAMPLE_OUTPUT_DATA[4]);
    assertionToBeTrue('Should have matching values at index 7', deDupedArray[7], SAMPLE_OUTPUT_DATA[7]);
  });

  it('should filter out exact duplicates when passing array to removeDuplicatesInArrayWithReduce', () => {
    const deDupedArray = removeDuplicatesInArrayWithReduce(SAMPLE_INPUT_DATA);
    assertionToBeTrue(`Should have length of ${SAMPLE_OUTPUT_DATA.length}`, deDupedArray.length, SAMPLE_OUTPUT_DATA.length);
    assertionToBeTrue('Should have matching values at index 0', deDupedArray[0], SAMPLE_OUTPUT_DATA[0]);
    assertionToBeTrue('Should have matching values at index 4', deDupedArray[4], SAMPLE_OUTPUT_DATA[4]);
    assertionToBeTrue('Should have matching values at index 7', deDupedArray[7], SAMPLE_OUTPUT_DATA[7]);
  });

  it('should filter out exact duplicates when passing array to removeDuplicatesInArrayWithLoop', () => {
    const deDupedArray = removeDuplicatesInArrayWithLoop(SAMPLE_INPUT_DATA);
    assertionToBeTrue(`Should have length of ${SAMPLE_OUTPUT_DATA.length}`, deDupedArray.length, SAMPLE_OUTPUT_DATA.length);
    assertionToBeTrue('Should have matching values at index 0', deDupedArray[0], SAMPLE_OUTPUT_DATA[0]);
    assertionToBeTrue('Should have matching values at index 4', deDupedArray[4], SAMPLE_OUTPUT_DATA[4]);
    assertionToBeTrue('Should have matching values at index 7', deDupedArray[7], SAMPLE_OUTPUT_DATA[7]);
  });

  console.log('\n')
})();