//1 forEach
// 

function doubleValues(arr){
    let newArray = [];
    arr.forEach(function(val){
        newArray.push(val * 2);
    })
    return newArray;
}
//2
function onlyEvenValues(arr){
    let newArray = [];
    arr.forEach(function(val)
    {
        if(val % 2 === 0){
        newArray.push(val);
        }})
    return newArray;}
//3
function showFirstAndLast(arr){
    let newArray = [];
    arr.forEach(function(val){
        newArray.push(val[0] + val[val.length-1]);
    })
    return newArray;}
// function showFirstAndLast(arr){
//     let newArray = [];
//     arr.forEach(function(val, index){
//       if (index === 0 || index === arr.length-1){
//         newArray.push(index);
//     }})
//     return newArray;

//4
const arr = [
{ first: "John", last: "Ferguson"},
{ first: "Jane", last: "Ferguson", isDogOwner: true},
{ first: "Doe", last: "Ferguson"}
];

function addKeyAndValue(arr, key, value) {
  arr.forEach(function(obj) {
    obj[key] = value;
  });
  return arr;
}

//5
function vowelCount(str) {
    const vowels = 'aeiou';
    const result = {};
    const input = str.toLowerCase().split('');
  
    input.forEach(function(char) {
        if (vowels.includes(char)) {
            result[char] = (result[char] || 0) + 1;
        }
    });
  
    return result;
}
//1 map functions

function doubleValuesWithMap(arr){  
     arr.map(function(val){
        return val * 2;
    });
}


//2
function valTimesIndex(arr){
  return arr.map(function(val, index){
      return val * index;
  });
}

//3


function extractKey(arr, key){
    arr.map(function(val){
        return val[key];
    });
}
//4

function extractFullName(arr){ 
    arr.map(function(val){
        return val.first + " " + val.last;
    });
}

//1
function filterByValue(arr, key) {
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}

//2

function find(arr, value) {
  return arr.find(function(val) {
      return val === value;
  });
}

//3

function findInObj(arr, key, value) {
  const result = arr.find(function(obj) {
      return obj[key] === value;
  });
  return result;
}
//4
function removeVowels(str) {
  const vowels = 'aeiou';
  return Array.from(str.toLowerCase())               
  .filter(function(char) {
    return !vowels.includes(char);
  }).join('');                     
}

//5
function doubleOddNumbers(arr) {
  return arr.filter(function(num) {
      return num % 2 !== 0;  
  }).map(function(oddNum) {
      return oddNum * 2;  
  });
}