// function Declaration
    // function identifier (parameterList opt) {FunctionBody}
// function jumlahDuaBilangan( a, b ){
//     var total;
//     total = a + b;

//     return total;
// }


// function expression
    //  function identifier opt (parameterList opt) {FunctionBody}
// var jumlahDuaBilangan = function( a, b ){
//     return a + b;
// }
// alert( jumlahDuaBilangan( 1,2 ) );


// var jumlahVolumeKubus = function( a, b ){
//     return a*a*a + b*b*b;
// }
// alert('Hasil Menjumlahkan Volume 2 Kubus: ' + jumlahVolumeKubus( 8, 3 ) );

// -----    ---
// functon tambah(a,b) {
//     return a+b;
// }

// function kali(a,b) {
//     return a*b;
// }

// var hasil = kali(tambah(1,2), tambah(4,5));
// console.log(hasil);

// -----    ----
// function tambah() {
//     return arguments;
// }
// var coba = tambah(5,10,20,"hi",false);
// console.log(coba);
    // arguments adalah sebuat variable yang berbentuk Arry yang bisa kita looping isinya.
    // Argumen yang di abaikan oleh functon tapi tetap tersimpan di arguments di dalam function tambah

// ----- ---- ---
// function tambah() {
//     var hasil = 0;
//     for( var i = 0; i < arguments.length; i++ ) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// var coba = tambah(1,2,3,4,5);
// console.log(coba);

    // arguments.length //.length berpungsi untuk menghitung index yang ada pada arguments karna
    // arguments berbentuk array
    // itulah penyebabnya arguments bisa menerima argumen yang di kirim.