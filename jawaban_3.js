//Hitung berapa lembar uang

const uang = [1000, 2000, 5000, 10000, 20000, 50000, 100000];
let jumlah_lembar = 0;

const output = (harga_barang, jumlah_lembar) => {
	if (
		harga_barang >= 0 &&
		harga_barang <= 100000 &&
		jumlah_lembar > 0 &&
		jumlah_lembar <= 10
	) {
		const pecahan = harga_barang / jumlah_lembar;
		let tmp = [];
		for (let i = 0; i < uang.length; i++) {
			tmp.push(Math.abs(pecahan - uang[i]));
		}
		let indexMin = tmp.indexOf(Math.min(...tmp));
		const result = uang[indexMin];
		const jumlah_pecahan = harga_barang / result;
		let arr = [];
		for (let i = 0; i < jumlah_pecahan; i++) {
			arr.push(result);
		}
		console.log(arr);
	} else {
		console.log('masukkan data sesuai kriteria');
	}
};

output(17000, 1);
output(30000, 3);
