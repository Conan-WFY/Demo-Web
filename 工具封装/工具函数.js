// 一般工具函放在utils/index.js中
//求任意两个随机数之间的数
function getRandom() {
    var res = [...arguments]; //将arguments类数组转换为类数组
    var max = Math.max([...res]);
    var min = Math.min([...res]);
    return Math.floor(Math.random()*(max-min+1)) + min;
}


//实现深拷贝 ARR
function clone(data) {
    if(typeof data !== 'object') throw new Error('the param must be object');
    var cloneObj = (Array.isArray(data))? []:{};
    for(var key in data) {
        cloneObj[key] = (cloneObj[key] instanceof Object)? clone(data[key]):data[key];
    }
    return cloneObj;
}


/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
 export function deepClone(source) {
    if (!source && typeof source !== 'object') {
      throw new Error('error arguments', 'deepClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    })
    return targetObj
  }
  
  

  /**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}


/**
 * @param {string} type
 * @returns {Date}
 */
 export function getTime(type) {
    if (type === 'start') {
      return new Date().getTime() - 3600 * 1000 * 24 * 90
    } else {
      return new Date(new Date().toDateString())
    }
  }


  /**
 * Merges two objects, giving the last one precedence  == Object.assign()
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
    if (typeof target !== 'object') {
      target = {}
    }
    if (Array.isArray(source)) {
      return source.slice()
    }
    Object.keys(source).forEach(property => {
      const sourceProperty = source[property]
      if (typeof sourceProperty === 'object') {
        target[property] = objectMerge(target[property], sourceProperty)
      } else {
        target[property] = sourceProperty
      }
    })
    return target
  }
  
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
 export function parseTime(time, cFormat) {
    if (arguments.length === 0 || !time) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string')) {
        if ((/^[0-9]+$/.test(time))) {
          // support "1548221490638"
          time = parseInt(time)
        } else {
          // support safari
          // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
          time = time.replace(new RegExp(/-/gm), '/')
        }
      }
  
      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
      const value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
      return value.toString().padStart(2, '0')
    })
    return time_str
  }
  
  