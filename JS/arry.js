// VIDEO KE - 35, ARRAY pada JAVASCRIPT : Manipulasi ARRAY
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "sandhika";
// arr[1] = "galih";
// arr[2] = "Nofa";
// arr[3] = "Doddy";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["sandhika", "galih", "Nofa"];
// arr[1] = undefined;
// console.log(arr);


// 3. Menampilkan isi array
// .length //untuk menghitung jumlah elemen pada array
// var arr = ["sandhika", "galih", "Nofa"];

// for( i = 0; i < arr.length; i++ ) {
//     console.log("mahasiswa ke- " + (i+1) + " " + arr[i]);
// }


// Method pada array
// 1. length
// 2. join  menampilkan isi array lebih rapi
// method adalah function yang berada pada sebuah objec

// var arr = ["sandhika", "galih", "Nofa"];
// console.log(arr.join());
// console.log(arr.join(' - '));

// 3. push //menambahkan pada akhir array
// arr.push('Doddy', 'Woman');

// 4. pop   //menghilangkan elemen terakhir pada array
// arr.pop();

// 5. unshift   //menambah pada awal array
// arr.unshift('Doddy');

// 6. shift //menghilangkan elemenn pertama array
// arr.shift();


// VIDEO KE - 36, ARRAY pada JAVASCRIPT : SLICE & SPLICE
// splice // menyambung/menyisipkan nilai di tengah-tengah
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Doddy');


// slice    //mengiris / mengambil elemen array
// slice(awal, akhir);
// var arr = ["sandhika", "galih", "Nofa", "Fitri", "Doddy"];
// var arr2 = arr.slice(1,3); //elemen array yang tampil adalah index ke 1 & 2
// console.log(arr2.join(' - '));


// -----    ----
// forEach = untuk setiap

// var angka = [1,2,4,3,7,5,6,8];
// angka.forEach(function(e) {
//     console.log(e);
// });

// e = elemen Array

// kita akan menjalankan function untuk tiap-tiap elemennya
// Untuk setiap elemen pada Array angka, lakukan fungsi berikut ini
// Penjelasan untuk program di atas




// var nama = ["Paozan","Wadi","Paisal"];
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e);
// });

// kita juga bisa mengakses index dan elemen (e, i)




// var angka = [1,2,4,3,7,5,6,8];
// var angka2 = angka.map(function(e){
//     return e* 2;
// });
// console.log(angka2.join(' '));

// MAP
// lebih baik dari forEach karna mengembalikan Array
// harus di tampung ke variable baru
// bisa di manipulasi juga seperti (return e* 2)



// SORT = mengurutkan
// var angka = [1,2,4,3,7,5,6,8];
// angka.sort();
// console.log(angka.join(' '));

// jika ada puluhan, tidak akan berjalan dengan baik

// var angka = [1,2,4,30,700,5,6,80];
// angka.sort(function(e,b){
//     return e-b;
// });
// console.log(angka.join(' '));


// 9 Filter & Find
// var angka = [1,2,4,30,700,5,6,80];
// var angka2 = angka.filter(function(x){
//     return x > 5;
// });
// console.log(angka2.join(', '));

// mengembalikan banyak nilai


// find
// var angka = [1,2,4,30,700,5,6,80];
// var angka2 = angka.find(function(x){
//     return x > 5;
// });
// console.log(angka2);

// mengembalikan satu nilai












