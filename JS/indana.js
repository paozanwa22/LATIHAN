
// for your gerfriend
var name = prompt ('Take your name? ');
if(name === "Indana") {
    alert ('Assalamualaikum \nSuatu kehormatan halaman web ini dikunjungi oleh\n' + name + '\nThank you');
    var iya = confirm ('Apakah ' + name + ' ingin membaca beberapa kata kata? ');
    if (iya === true){
        var oky = confirm ('Saya suka melihat senyuman mu  ( ; \ningin membaca beberapa kata lagi? ');
        if (oky === true) {
            alert ('Saya kehabisan kata-kata  ( ; \nMaaf....');
            alert('Terimakasih Sudah berkunjung ' + name + '\nkata kata selalu di update sehari setelah ' + name + ' berkunjung.');
        }else {
            alert('Terimakasih Sudah berkunjung ' + name + '\nkata kata selalu di update sehari setelah ' + name + ' berkunjung.');
        }
    }else{
        alert('Terimakasih Sudah berkunjung ' + name + '\nkata kata selalu di update sehari setelah ' + name + ' berkunjung.');
    }
} else if (name === "Paozan Wadi"){
    alert ('Assalamualaikum kapten\n' + name + '\nHari ini banyak yang harus diselesaikan');
} else {
    alert ('Assalamualaikum\n' + name + '\nSemoga Hari mu menyenangkan.')
}



