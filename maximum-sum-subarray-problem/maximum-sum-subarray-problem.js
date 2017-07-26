/*  WIP: JavaScript Implementation as I understand it now, probabaly wrong. 

    Next steps:
        * understand question better:
            - http://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
            - https://stackoverflow.com/questions/32367032/kadanes-algorithm-explained
        * redo if need to


    view code: https://codepad.remoteinterview.io/PHBVDAUEPG
    
    The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

        maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
        // should be 6: [4, -1, 2, 1]

    Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

    Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
    

    
/* START *//* verstion 1.0.0 */

function maxSequenceV1 (sequence) {
    
    let sum = 0, tempSum = 0;
    
    sequence.forEach(function(item, index, array) {
        
        tempSum = tempSum + item;
        
        if (tempSum < 0) {
            tempSum = 0;
        }
        
        if (tempSum > sum) {
            sum = tempSum;
        }
        
    });
    
    return sum;
    
}

/* END *//* verstion 1.0.0 */

function assertEquals (testValue, expectedResult) {
    if (testValue === expectedResult) {
        console.log('SUCCESS: ' + testValue + ' equals ' + expectedResult);
    } else {
        console.log('FAIL: ' + testValue + ' does not equal to ' + expectedResult);
    }
}

assertEquals(maxSequenceV1([]), 0);
assertEquals(maxSequenceV1([-1, -2, -3]), 0);
assertEquals(maxSequenceV1([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
