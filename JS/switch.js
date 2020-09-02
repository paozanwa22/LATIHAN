var nilai = parseInt(prompt('masukkan angka :'));

switch ( nilai ) {
    case 1 :
        alert('yang anda masukkan angka 1');
        break;
    case 2 :
        alert ('yang anda masukkan angka 2');
        break;
    default :
        alert ('salah');
}

//bisa juga dengan example berikut
var item = prompt('masukkan makana : nasi, hamburger ...');

switch() {
       case 'nasi' :
       case 'daging' :
       case 'susu' :
            alert('makanan / minuman SEHAT!');
            break;
       case 'nasi' :
       case 'nasi' :
            alert('makanan / minuman TIDAK SEHAT!');
            break;
       default :
            alert('yang anda masukkan tidak ada di menu');
            break;
       }
