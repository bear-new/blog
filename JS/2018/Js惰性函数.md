## 惰性函数

### 方法1
``` js
function lazy(type) {
    console.log('lazy function')

    let log = '';
    if (type === 1) {
        log = 'one one one';
    }
    if (type === 2) {
        log = 'two two two';
    }

    lazy = () => {
        console.log(log);
    }

    return lazy(type);
}

lazy(2)
console.log('-------')
lazy(2)
```
### 方法2
``` js
const lazy = ((type) => {
    console.log('lazy function')

    let log = 'one one one';
    type === 2 && (log = 'two two two');

    return () => {
        console.log(log);
    };
})(2)

lazy()
console.log('-------')
lazy()
```
匿名函数实现惰性函数
```js
// 新手
var gotop = function(){
    if(/firefox/i.test(navigator.userAgent)) {
        document.documentElement.scrollTop = 0;
    } else {
        document.body.scrollTop = 0;
    }
}
// 老司机
var gotop = (function(){
    var isFF = /firefox/i.test(navigator.userAgent);
    var docEl = document[ isFF ? 'documentElement' : 'body' ];
    return function(){
        docEl.scrollTop = 0;
    }
})();
```

__打印结果__:

lazy function

2222

two two two

```-------```

two two two

__优点__:
多次调用，判断条件只执行一次，提升代码效率

__缺点__:
不适用于判断条件可变的函数调用

### 方法3
static单例模式
```js
var instance = null;
class Storage {
  static getInstance() {
    if (!instance) {
      instance = new Storage();
    }
    return instance;
  }
  setItem(key, value) {
    localStorage.setItem(key, value)
  }
  getItem(key) {
    return localStorage.getItem(key)
  }
}

const x = Storage.getInstance()
x.setItem('test', 123);
console.log(x.getItem('test'))
```