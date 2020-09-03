//PENGULANGAN DAN PENGKONDISIAN BERSARANG pada JAVASCRIPT
var s = '';

// *
// **
// ***
// ****
// *****

// for( var i = 0; i < 5; i++ ){
//     for( var j = 0; j <= i; j++ ){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// *****
// ****
// ***
// **
// *

// for( var i = 0; i < 5; i++ ){
//     for( var j = 5; j > i; j-- ){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// for( var i = 0; i < 5; i++ ){
//     for( var j = 5; j > i; j-- ){
//         s += ' ';
//     }
//     for( var k = 0; k <= j; k++ ){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// for( var i = 0; i < 5; i++ ){
//     for( var j = 0; j < i; j++ ){
//         s += ' ';
//     }
//     for( var k = 5; k > j; k--){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

for( var i = 0; i < 5; i++ ){
    for( var j = 0; j < i; j++ ){
        s += ' ';
    }
    for( var k = 5; k > j; k--){
        s += '*';
    }
    s += '\n';
}
console.log(s);
