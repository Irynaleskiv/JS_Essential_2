//1) Find and display total sum of numbers from 1 to 3
function totalSum1() {
    var sum = 0;
    var i;
    for (i = 1; i <= 3; i++) {
        sum += i;
    }
    return sum;
}
console.log("Total sum of numbers from 1 to 3 is", totalSum1());

//2) Find and display total sum of numbers from 20 to 220
function totalSum2() {
    var sum = 0;
    var i;
    for (i = 20; i <= 220; i++) {
        sum += i;
    }
    return sum;
}
console.log("Total sum of numbers from 20 to 220 is", totalSum2());

//3) Display even numbers from 1 to 20 by using for loop

// by using "continue"

function evenNumb1(a, b) {
    for (var i = a; i <= b; i++) {
        if (i % 2) {
            continue;
        }
        else {
            console.log(i);
        }
    }
}
evenNumb1(1, 20);

// without using "continue"

function evenNumb2(a, b) {
    for (var i = a; i <= b; i++) {
        if (i % 2) {
            console.log(i + 1);
        }
    }
}
evenNumb2(1, 20);

//4) Display even numbers from 1 to 20 by using for loop

function oddNumb(a, b) {
    while (a <= b) {
    	if (a % 2) {
            console.log(a);
    	}
    	a++;
    }
}
oddNumb(10, 30);

/*5) Display numbers from 1 to 15 using ‘for’ loop, once num of iteration
 is equal the num of month of your birthday then stop execution of loop */

function  fiveMonth(a) {
    for (var i=0; i<=a; i++){
        console.log("Month:", i);
    }
}
fiveMonth(5);

//6) Rewrite code from using ‘for’ to using ‘while’
 
function rewriteToWhile() {
	var i = 0;
    while (i < 5) {
   		 console.log(`number ${i}  =)`);
        i++;
	}
}
rewriteToWhile();

/*7) Write code which will ask user (prompt ) to put number greater than 100,
 repeat prompt until user put required number, then display result of prompt */

 // by using "continue"

function askNum1() {
    var  num;
    while (num < 100 || isNaN(num)) {
        num = prompt("Please, put the number greater than 100", "777");  
    }
    console.log(num);
}
askNum1();

 // without using "continue"

function askNum2() {
    var num = 0;
    do {
        num = prompt("Please, put the number greater than 100", "777");
    }
    while (num < 100 || isNaN(num))
    console.log(num);
}
askNum2();

//8) Show in console using "for"

function grid() {
	var hash = "#";
	var i;
    for (i = 0; i < 8; i++) {
        console.log(hash);
        hash += hash[i];
    }
}
grid();