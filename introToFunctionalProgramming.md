	
## Map, Filter, Reduce! 
### Map
The map method takes in a function, runs that function on each and every element of an array, and returns a new array of the same length. 

>Given the array `var numbers = [1, 2, 3, 4, 5]`, produce a new array containing each number times 10. The output should be [10, 20, 30, 40, 50]

	var numbersTimesTen = numbers.map(function(element){
		return element * 10;
	});

### Filter
Filtering filters values we want out of an array and return a new array of only the filtered values. The filter method takes in a function and runs that function on all elements. If the function that .filter takes in returns `true`, then that particular element is added to the new array of filtered values that .filter returns.

>Given the array `var numbers = [1, 2, 3, 4, 5]`, produce a new array containing only the even numbers. The output should be [2, 4]

	var evens = numbers.filter(function(element){
		return (element % 2 == 0) ? true : false;
	});

### Reduce
To reduce means to reduce collection to a single value. Most commonly, we will use it to transform a collection into a single data type.
> Given the array `var numbers = [1, 2, 3, 4, 5]`, produce an integer that represents the sum of all the numbers added together.
	
	var sum = numbers.reduce(function(accumulator, element) {
		return accumulator + element;
	}, 0);
