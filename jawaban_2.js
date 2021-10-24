const axios = require('axios').default;

const host = 'api.frankfurter.app';

const conversion = async (input) => {
	for (let i = 0; i < input.length; i++) {
		await axios
			.get(
				`https://${host}/latest?amount=${input[i].amount}&from=${input[i].currency}&to=USD`
			)
			.then((res) => {
				const { USD } = res.data.rates;
				let arr = [];
				arr.push(USD);
				console.log(arr);
			});
	}
};

let input = [
	{ amount: 15000, currency: 'IDR' },
	{ amount: 3.1, currency: 'EUR' },
];

conversion(input);
