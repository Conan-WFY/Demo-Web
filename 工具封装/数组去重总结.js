// 法一：标记法
// 常规写法：
// var arr = [1,2,2,3,3,4,3,3];
var flag = false;
var res = [];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < res.length; j++) {
        if (arr[i] === res[j]) {
            flag = true;
            break
        } else {
            flag = false;
        }
    }
    if (!flag) {
        res.push(arr[i]);
    }
}
// 函数封装：
function unique(arr) {
    var flag = false;
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                flag = true;
                break
            } else {
                flag = false;
            }
        }
        if (!flag) {
            res.push(arr[i]);
        }
    }
}
unique();




//法二：splice方法 + for循环
// 常规方法
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--;
        }
    }
}
//函数封装
function unique_2(array) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                splice(j, 1);
                j--;
            }
        }
    }
    return arr
}
unique_2();


// 法三：for循环 + indexOf方法
// 常规方法
var res = [];
for (var i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i] === -1)) {
        res.push(arr[i]);
    }
}


// 函数封装
function unique_3(array) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i] === -1)) {
            res.push(arr[i]);
        }
    }
    return res;
}
unique_3();


// 法四：filter方法
// 常规方法
var res = arr.filter(function (item, index, arr) {
    return arr.indexOf(item) !== index
})


// 法五：ES6 方法
var arr = [1, 2, 1, 1, 2, 3, 4];
[...new Set(arr)]  //[1,2,3,4]


// 法六：利用sort()
// 常规方法
var arr = [1, 2, 1, 2, 4, 2, 5];
arr = arr.sort();
var array = [arr[0]];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
        array.push[arr[i]]
    }
}
console.log(array);
//函数方法
function unique_4(arr) {
    arr = arr.sort();
    var array = [arr[0]];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            array.push(arr[i]);
        }
    }
    return array
}



// 法七：利用hasOwnProperty() 方法
function unique_5(arr) {
    var obj = {};
    return arr.filter(function (item, index, arr) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
    })
}
var arr = [1, 2, 3, 4, 2, 4, 2, 32, 2, 4, 6, 78, 2];
console.log(unique(arr));



// 法八：利用reduce + include
function unique_6(arr) {
    return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}
var arr = [1, 2, 3, 4, 2, 4, 2, 32, 2, 4, 6, 78, 2];
console.log(unique(arr));




// 法九：利用递归去重
function unique_7(arr) {
    var len = arr.length;

    arr.sort(function (a, b) { a - b })
    function loop(index) {
        if (index >= 1) {
            if (arr[index] === arr[index - 1]) {
                arr.splice(index, 1);
            }
            loop(index - 1);
        }
    }
    loop(len - 1);
    return arr;
}
