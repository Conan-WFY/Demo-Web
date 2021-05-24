// 数组去重
function unique(arr) {
    if(!(Array.isArray(arr))) throw new Error('the param must be array');
    var res = [];
    arr.forEach(function(item) {
       if(res.indexOf(item) === -1) {
           res.push(item);
       }else{
           return;
       }
    })
    return res;
}

