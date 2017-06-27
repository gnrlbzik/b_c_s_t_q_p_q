/* First JavaScript Implementation 
Question: "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."
view code: http://jsbin.com/yucezub/8
edit code: http://jsbin.com/yucezub/8/edit
START */

let number = 0;
while (number < 100) {  
  number++;
  
  const fizz = ((number % 3) === 0) ? 'Fizz' : undefined ;
  const buzz = ((number % 5) === 0) ? 'Buzz' : undefined ;

  document.write(
    (((fizz || '') + (buzz || '')) || (number)) + '<br />'
  );
}

/* END // First JavaScript Implementation */
