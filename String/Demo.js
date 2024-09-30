//I run this demo of string functions directluy on console
//Riya Munot
//1 length
str="Welcome to javascript program"
str.length

//2. Slice
let str="Apple,Banana,Kiwi";
let part=str.slice(7,13);
let str="Apple,Banana,Kiwi";
let part=str.slice(-12,-6);
let part=str.slice(7);
let part=str.slice(-12);

// 3. substring
let str="Apple,Banana,Kiwi";
let part=str.substring(7,13);
let part=str.substring(7,6)
let part=str.substring(7)
let part=str.substring(-4)

//4.replace
let text="Please visit Microsoft and Microsoft!";
let newText=text.replace("Microsoft",Javascript);

//5.toUpperCase
let text1="Hello World";
let text2=text1.toUpperCase();

//6.toLowerCase
let text1="Hello World";
let text2=text1.toLowerCase();

//7.concat
let text1="Hello";
let text2="World..!";
let text3=text1.concat(" ",text2);
text3

//8.trim
let text1="Hello World..!";
let text2=text1.trim();

//9.padding
//a.padstart
let text="Wel";
text.padStart(10,"*")

//b.padEnd
let text="Wel";
text.padEnd(10,"*")

//10 charAt
var text="Hello World..!";
text.charAt(0)

//11.CharCodeAt
let text = "HELLO WORLD";
let code = text.charCodeAt(0);
code

//12.split()
let text="Welcome to Javascript programming";
"const myarray="text.split(" ")
myarray

//13.indexof()
var str="Wel come";
"position of e="+str.indexOf('e')

//14.lastindexof
var str="Wel come";
"position of e="+str.lastIndexOf('e')


//15.bold
var str="Wel come";
str.bold()

// 16.italics
var str="Wel come";
+str.italics()


//15.anchor
var str="Wel come";
str.anchor()

//16. fontcolor
var str="Wel come";
str.fontcolor('red')


