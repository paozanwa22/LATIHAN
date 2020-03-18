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

// masih dalam pertanyaan besar.????
// tanyakan, kenapa elemen Array bisa berurutan ???


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