在我们到数组这块内容的时候，我们会发现数组的方法居多，功能巨强大，进行我们对数组的所有原生方法进行分类总结。

**1. 检测数组**
- `instanceof`方法
> // 用于检测某个属性或者对象是否属于对象或者数组
> // 返回值为 true/false
> var arr = [[],1,2,3];
> console.log(arr instanceof Array);  //true
> console.log(arr[0] instanceof Array); //true
> // 还可以检测的是否为对象
- `Array.isArray` 方法 
> // 用于确定一个传入的值是否为数组Array
> // 返回值为true/false
> console.log(Array.isArray([1,2,3]));  //true
> console.log(Array.isArray({name:'conan'}));  //false
- `Array.from` 方法
> // 将类数组转化为真正的数组
> // 返回值为转换过的数组
> console.log(Array.from([[1,2,3]]));  //[1,2,3]  类数组转换为数组
> console.log(Array.from('foo'));  //['f', 'o', 'o']  字符串转换为数组
> function f() {
>    return Array.from(arguments);
> }
> f(1,2,3);    // [1,2,3]

-`Array.toString()` 方法
> // 将数组转换为字符串, 并用逗号隔开  返回一个字符串
> var arr = [1,2,'a','conan']  
> console.log(arr.toString())  // '1,2,a,conan'

- `Array.join()`方法
> // 将一个数组或者类数组通过指定的连接符来连接数组元素，并返回一个字符串
> var arr = [1,2,'wang', 'conan'] ;
> console.log(arr.join());   // '1,2,wang,conan'  默认情况下用逗号连接
> console.log(arr.join(''));  //'12wangconan'
> console.log(arr.join('-'));  //'1-2-wang-conan'

- `Array.push()` 方法
> // 栈方法 将一个或多个新元素**添加**到数组的**末尾**，返回**新数组的长度**
> var arr = ['conan', 'wang'];
> console.log(arr.push('king'));  // ['conan', 'wang', 'king']

- `Array.pop()` 方法
> // 栈方法， 从数组**末尾**中**删除**一个或多个元素， 返回**被删除的元素**
> var arr = ['conan', 'wang', 'king'];
> console.log(arr.pop());  // ['conan','wang']

- `Array.shift()` 方法
> //队列方法  从数组的**开头删除第一个元素**，并返回**被删除的元素**
> var arr = ['conan', 'wang', 'king'];
> console.log(arr.shift());  //['wang', 'king']

- `Array.unshift()` 方法
> // 队列方法， 在数组的**开头添加**一个后多个元素，并返回**新的数组长度**
> var arr = ['conan', 'wang', 'king'];
>console.log(arr.unshift('handsome')); //['conan', 'wang', 'king','handsome']

- `Array.sort()`方法
> //重排序方法   //默认情况下是按照unicode编码进行排序，
> var arr = [1,2,5,3,6,7,4]
> console.log(arr.sort(function(a,b) {return a-b})); //[1,2,3,4,5,6,7]

- `Array.reverse()`方法
> // 重排序方法  将数组进行一个反转数组，并返回反转数组
> var arr = [7,6,5,4,3,2,1]
> console.log(arr.reverse()); //[1,2,3,4,5,6,7]

- `Array.concat()` 方法
> // 操作方法 ：将数组进行合并 并返回合并后的数组
> var num1 = [1,2,3], num2 = [4,5,6];
> console.log(num1.concat(num2));  //[1,2,3,4,5,6]

- `Array.slice()` 方法
> // 操作方法： 拷贝数组片段，不会改变原数组，并返回选取的片段。 
> // Array.slice(startIndex, endIndex) / 不包括结束索引
> var arr = ['wang', 'conan', 'is', 'king'];
> console.log(arr.slice(1, 2));   // ['conan']

- `Array.splice()`方法
> // 操作方法： 通过删除或替换现有元素或在原数组中添加新元素来修改数组，以数组的形式返回被修改的部分。
> var arr = ['wang', 'conan', 'deng'];
    console.log(arr.splice(0,1)); //删除  返回删除的元素的数组
    console.log(arr.splice(1,0,'dani')); //插入 返回空数组
    console.log(arr.splice(1,1,'dani')); //替换 返回被删除的数组

- `Array.indexOf()` 方法
> // 位置方法：返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1.
> // 参数： （需要查找的元素/ 查找的起点）
> var arr = ['wang', 'conan','king']
> console.log(arr.indexOf('king'));  //2

- `Array.lastIndexOf()`方法
> // 位置方法: 反向查询并返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1.

- `Array.every()` 方法
> // 迭代方法： Array.every(function(item, index, array) {}) 全true为true  返回true/false 检测数组的方法，可以传入一个检测函数作为 callback()

- `Array.some()` 方法
> // 迭代方法： Array.some(function(item, index, array) {}) 一true为true   返回true/false  只要有一个元素满足条件，就立刻返回 true
- `Array.filter()` 方法
> // 迭代方法： Array.filter(function(item, index, array) {}) 返回基于测试函数 callback() 的返回值，筛选出原数组中符合条件的元素，组成新数组并返回;  不会修改原数组，也不能提前结束遍历
- `Array.forEach()` 方法
> // 迭代方法： Array.forEach(function(item, index, array) {}) 没有返回值 相当于for循环   无法中止遍历
- `Array.map()` 方法
> // 迭代方法： Array.map(function(item, index, array) {})  返回重构数组
- `Array.find()` 方法
> // 迭代方法： Array.find(function(item, index, array) {}) 返回满足测试函数的元素数组的的第一个值并终止遍历 否则为undefined

- `Array.reduce()` 方法
> 归并方法：Array.reduce(function(acc, cur, index, array) {}, inintalValue) 返回计算结果 具有的累计器的功能。