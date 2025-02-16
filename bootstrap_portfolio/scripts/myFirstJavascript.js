//alert("Hello World!");
var hello = "hello";

console.log("This is good for debugging " + hello)

function print3Ways() {
    alert("Pop up Window!");
    console.log("prints to the developer console");
    document.write("This will override the entire HTML document");
}

const arr = [1,2,3,4,5];

function getSum() {
    sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function findMin() {
    min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax() {
    max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > min) {
            max = arr[i];
        }
    }
    return max;
}

function average() {
    avg = 0;
    sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

function funWithArrays() {
    document.write("The sum of the array is " + getSum());
    document.write("<br>The minimum element in the array is " + findMin());
    document.write("<br>The maximum element in the array is " + findMax());
    document.write("<br>The average of the elements in the array is " + average());
}

function firstFunction(callback) {
    console.log("about to execute callback function");
    callback();
}

function myCallbackFunction() {
    console.log("this is the callback function that does something special.")
}

function soManyFunctions() {
    console.log("in soManyFunctions. Begin function calls.");
    firstFunction(myCallbackFunction);
    console.log("returning to soManyFunctions.");
}