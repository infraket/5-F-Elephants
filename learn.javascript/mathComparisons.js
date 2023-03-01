let a = 1, b = 1;

let c = ++a; // ? 2
let d = b++; // ? 1
 //a = 2;
// b = 2;

"" + 1 + 0 // 10
"" - 1 + 0 //  -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6 
4 + 5 + "px" // 9px
"$" + 4 + 5 // $9
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // " -9  5"
"  -9  " - 5 // " -14 "
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 //  -2 


//Comparisons

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false