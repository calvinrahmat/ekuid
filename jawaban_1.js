// Calculate mean and median for each part

function left(array) {
	for (let i = 1; i < array.length; i += 1) {
		if (array[i - 1] > array[i]) {
			array = array.slice(0, i);
		}
	}

	const length = array.length;
	const reducer = (prev, curr) => prev + curr;
	const mean = array.reduce(reducer) / length;
	if (length % 2 !== 0) {
		const median = (length + 1) / 2 - 1;
		const output = [
			{
				mean: mean,
				median: array[median],
			},
		];
		return output;
	}
	if (length % 2 === 0) {
		const num1 = Math.floor(length / 2 - 1);
		const num2 = Math.floor(length / 2);
		const median = (array[num1] + array[num2]) / 2;

		const output = [
			{
				mean: mean,
				median: median,
			},
		];
		return output;
	}
}

function right(array) {
	for (let i = array.length; i > 1; i -= 1) {
		if (array[i] < array[i - 1]) {
			array = array.slice(i, array.length);
		}
	}
	const length = array.length;
	const reducer = (prev, curr) => prev + curr;
	const mean = array.reduce(reducer) / length;
	if (length % 2 !== 0) {
		const median = (length + 1) / 2 - 1;
		const output = [
			{
				mean: mean,
				median: array[median],
			},
		];
		return output;
	}
	if (length % 2 === 0) {
		const num1 = Math.floor(length / 2 - 1);
		const num2 = Math.floor(length / 2);
		const median = (array[num1] + array[num2]) / 2;

		const output = [
			{
				mean: mean,
				median: median,
			},
		];
		return output;
	}
}

let numbers = [3, 4, 6, 17, 25, 21, 23];

const merge = [...left(numbers), ...right(numbers)];

console.log(merge);
