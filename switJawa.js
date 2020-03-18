
var tru = true;
while( tru ){

    // menangkap pilihan player
    var p = prompt('pilih : gajah, orang, semut');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ){
        comp = 'gajah';
    }else if( comp >= 0.34 && comp < 0.67 ){
        comp = 'orang';
    }else{
        comp = 'semut';
    }

    // menentukan hasil
    var hasil = '';
    if( p == comp ){
        hasil = 'SERI';
    }else if( p == 'gajah' ){
        // if( comp == 'orang' ){
        //     hasil = 'MENANG';
        // }else{
        //     hasil = 'KALAH';
        // }
        hasil = ( comp == 'orang' ) ? 'MENANG' : 'KALAH';
    }else if( p == 'orang' ){
        hasil = ( comp == 'semut' ) ? 'KALAH' : 'MENANG';
    }else if( p == 'semut' ){
        hasil = ( comp == 'gajah' ) ? 'MENANG' : 'KALAH';
    }else{
        hasil = 'Pilihan anda tidak ada';
    }

    // menampilkan hasil
    alert('Anda memilih : ' + p + '\nComputer memilih : ' + comp + '\nAnda ' + hasil );

    tru = confirm('Coba lagi ?');
}

alert('Terimakasih...')