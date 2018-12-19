var a = 1;
var b = a + 1;
var c;
var mul = 0;
while ( a < 1000 ) {
    while ( b < 1000 && b > a ) {
        c = 1000 - a - b;
        if ( c < b ) {
            break;
        }
        if ( Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ) {
            mul= a * b * c;
        }
        b++;
    }
    a++;
    b = a + 1;
}
console.log(mul);
