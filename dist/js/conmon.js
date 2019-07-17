
  // 公共函数用于解析地址栏参数
  function getSearch() {
    // 从地址栏中, 获取参数
    var str = location.search;   // "?name=pp&age=18&desc=%E5%B8%85"

    // 有中文, 需要解码
    str = decodeURI(str);       // "?name=pp&age=18&desc=帅"

    // 去掉问号 
    // slice(start, end); 从start开始, 截取到end结束, 包含start, 不包含end
    str = str.slice(1);         //  "name=pp&age=18&desc=帅"

    // str.split('分割符'); 将字符串, 分割成数组 
    var arr = str.split('&');    // ["name=pp", "age=18", "desc=帅"]

    var obj = {};

    // 遍历数组, 通过等号切割, 得到键 和 值
    for (var i = 0; i < arr.length; i++) {
      // arr[i] 每一项 "age=18"   ["age", "18"]
      var key = arr[i].split('=')[0];  // age
      var value = arr[i].split('=')[1];  // 18

      // 将键值扔到 obj 中, [] 可以解析变量
      obj[key] = value;
    }

    return obj;
  }

