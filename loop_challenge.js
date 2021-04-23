for(var i = 1; i < 11; i++) {
    if(i%2 == 1) {
        console.log(i)
    }
}

console.log("")

var arr = [4, 2.5, 1, -0.5, -2, -3.5]

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log("")

var sum = 0;
for(var i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

console.log("");

var ie8 = 100000000;
var product = 1;
var n = 0;

while(product < ie8) {
    n++;
    product = product * n;
}

console.log(n);
