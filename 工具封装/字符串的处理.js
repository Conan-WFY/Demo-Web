var str = 'djfqweurqwe432423edfssdfsd';
// 统计 d 字符再 str 中出现了多少次
var count = 0;
for(var i = 0; i < str.length; i++){
    if(str[i] === 'd'){
        count ++;
    }
}
console.log(count);
// 统计每一个字符出现的次数
var arr = str.split('');
var newArr = [...new Set(arr)]
var arrObj = {};
var count = 0;
var flag = false;
for(var j = 0; j < newArr.length; j++) {
    for(var i = 0; i < arr.length; i++) {
        if(newArr[j] === arr[i]) {
            count++;
        }
    }
    arrObj[arr[j]] = count;
    count = 0;
}


// 函数封装另一种
function geNumStr(str) {
    var obj = {};
    for(let i = 0; i < str.length; i++) {
       var value = str.charAt(i);
       if(obj[index] > 0) {
           obj[index] ++;      
       } else {
           obj[index] = 1;
       }
    }
    
    for(var i in obj) {
       console.log(i + '出现的次数为' + obj[i] + '次')
    }
 }