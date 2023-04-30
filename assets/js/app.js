var cl = console.log;

// Array >> Where we can store multiple data on the basis of index number

var ages = [15,16,17,19,25,36,45,58,63,45,57,62];

// to get value from array
// arrayName [indexNumber]
var getAge = ages[3];
cl(getAge)

// to change the value in array
// arrayName [indexNumber] = new value;
ages[5] = 50;
cl(ages)

// 1 array litral

var x = [10]
cl(x);
// 2 array constructor

var y = new Array(115,120,256,145,369,789);
cl(y);

var z = new Array(10);
cl(z)


// find out no of elements in array (arrayLength)
//noofEle1  2  3  4  5  6  7
ages = [15,16,17,19,25,36,45];
// indexo   1  2  3  4  5  6
// length >> is a property

// indexNoofLastElement = arrayName.length -1
var agesLenth = ages.length;

cl(agesLenth);
// change the value of last index element
// ages[6] = 50;
ages [ages.length -1] = 50
cl(ages)

// object methods and object properties
// method >> if the value of key is function then it is called as "method"
// property >> if the value of key is not a function then it is called as "property"
var person = {
    fname : "Jhon",
    lname : "Doe",
    age : 33,
    fullname : function(){
        return this.fname + " " + this.lname
    }
}