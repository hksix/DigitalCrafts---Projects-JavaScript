// weekArry = {sun: 0 , mon : 0, tues: 0, wed:0, thurs:0, fri:0, sat:1 }
// monthArry = [jan: 30  ]

// // 7mnth 31
// // 4mnths 30
// // 1mnths 28
// var monthDays = {Jan : 31,
//                     Feb: 28,
//                     Mar: 31,
//                     Apr: 30,
//                     May	: 31,
//                     Jun : 30,
//                     Jul : 31,
//                     Aug: 31,
//                     Sept: 30,
//                     Oct: 31,
//                     Nov: 30,
//                     Dec: 31}

// // roman numurals

function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}